import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Editor } from "@monaco-editor/react";
import styled from "@emotion/styled";
import * as esprima from "esprima";
import { useCodeBlocks, useModal } from "../context";
import { TCodeBlock } from "../types";
import { socketService } from "../services";
import { Container as ContainerOrigin, Loader } from "../libs";
import { motion, AnimatePresence } from "framer-motion";
import { EmojiEmotions } from "@mui/icons-material";
import { Button as MuiButton } from "@mui/material";

const Wrapper = styled.div`
  min-height: 100dvh;
`;

const Container = styled(ContainerOrigin)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Indicator = styled.h3`
  color: rgba(119, 176, 244, 1);
`;

const CodeEditorContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  padding-block: 2rem;
  color: rgba(119, 176, 244, 1);
`;

const Button = styled(MuiButton)`
  margin-block-start: 1rem;
  align-self: center;
`;

const ButtonTxt = styled.h4``;

const IndicatorContainer = styled.div``;

const StudentCounter = styled.h3``;

const ModalContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const ModalTitle = styled.h3``;

const CodeBlockPage: React.FC = () => {
  const navigate = useNavigate();
  const { codeBlocks } = useCodeBlocks();
  const { id: codeBlockId } = useParams();
  const {
    showModal: showForceLeaveRoomModal,
    closeModal: closeForceLeaveRoomModal,
  } = useModal();
  const [codeBlock, setCodeBlock] = useState<TCodeBlock | null>(null);
  const [codeContent, setCodeContent] = useState<string>("");
  const [roomStudentsCount, setRoomStudentsCount] = useState<number>(0);
  const [isMentor, setIsMentor] = useState<boolean>(false);
  const [isSolutionCorrect, setIsSolutionCorrect] = useState<boolean>(false);

  //setting the specific codeBlock
  useEffect(() => {
    if (codeBlocks) {
      const selectedCodeBlock =
        codeBlocks.find((cb) => cb._id === codeBlockId) || null;
      if (selectedCodeBlock) {
        setCodeBlock(selectedCodeBlock);
      }
    }
  }, [codeBlocks, codeBlockId]);

  useEffect(() => {
    if (!codeBlockId) return;

    socketService.setup();

    socketService.joinRoom(codeBlockId);

    //socket listeners
    socketService.on("update-code-content", setCodeContent);
    socketService.on("set-is-mentor", setIsMentor);
    socketService.on("update-room-count", setRoomStudentsCount);
    socketService.on("force-leave-room", forceLeaveRoom);

    return () => {
      socketService.leaveRoom(codeBlockId);
      socketService.terminate();
    };
  }, [codeBlockId]);

  //check solution and trigger smiley face animation if solved (not in handleCodeChange() because of state delay)
  useEffect(() => {
    if (!codeContent) return;
    setIsSolutionCorrect(checkSolution());
  }, [codeContent]);

  const handleCodeChange = (newCodeContent: string = "") => {
    if (!codeBlockId) return;
    socketService.updateCode(codeBlockId, newCodeContent);
    setCodeContent(newCodeContent);
  };

  const checkSolution = (): boolean => {
    if (!codeBlock || !codeContent) return false;
    try {
      const codeAST = esprima.parseScript(codeContent);
      const solutionAST = esprima.parseScript(codeBlock.solution);
      return JSON.stringify(codeAST) === JSON.stringify(solutionAST);
    } catch (error) {
      return false;
    }
  };
  const forceLeaveRoom = () => {
    showForceLeaveRoomModal(
      <ModalContent>
        <ModalTitle>Mentor has left the room,</ModalTitle>
        <ModalTitle>choose another code block.</ModalTitle>
        <Button onClick={closeForceLeaveRoomModal} variant="contained">
          <ButtonTxt>got it</ButtonTxt>
        </Button>
      </ModalContent>
    );

    navigate("/");
  };

  if (!codeBlock) return <Loader />;
  return (
    <Wrapper>
      <Container>
        <CodeEditorContainer>
          <TitleContainer>
            <Title>{codeBlock.title}</Title>
            <IndicatorContainer>
              <Indicator>Hello, {isMentor ? "Mentor" : "Student"}.</Indicator>
              <StudentCounter>
                Students in room : {roomStudentsCount}
              </StudentCounter>
            </IndicatorContainer>
          </TitleContainer>
          <Editor
            options={{
              readOnly: isMentor,
            }}
            onChange={handleCodeChange}
            theme="vs-dark"
            height="50vh"
            defaultLanguage="javascript"
            value={codeContent}
            loading={false}
          />
        </CodeEditorContainer>
        {/* smiley face animation */}
        <AnimatePresence>
          {isSolutionCorrect && (
            <motion.div
              className="svg-overlay"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <EmojiEmotions sx={{ fontSize: 100 }} />
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Wrapper>
  );
};

export default CodeBlockPage;
