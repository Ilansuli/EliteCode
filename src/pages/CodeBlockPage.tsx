import React, { useEffect, useState } from "react";
import { useCodeBlocks } from "../context/CodeBlockContext";
import { useParams } from "react-router-dom";
import {
  Button as ButtonOrigin,
  Container as ContainerOrigin,
  Loader,
} from "../libs";
import { Editor } from "@monaco-editor/react";
import { TCodeBlock } from "../types";
import styled from "@emotion/styled";
import { socketService } from "../services";

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

const Editors = styled.div`
  display: flex;
  gap: 1rem;
`;

const Title = styled.h1`
  padding-block: 2rem;
  color: rgba(119, 176, 244, 1);
`;

const Button = styled(ButtonOrigin)`
  align-self: center;
`;
const ButtonTxt = styled.h4`
  color: rgb(23 23 23);
`;
const CodeBlockPage: React.FC = () => {
  const { codeBlocks } = useCodeBlocks();
  const { id: codeBlockId } = useParams();
  const [codeBlock, setCodeBlock] = useState<TCodeBlock | null>(null);
  const [isSolution, setIsSolution] = useState<boolean>(false);
  const [studentCount, setStudentCount] = useState(0);

  useEffect(() => {
    if (codeBlocks) {
      const selectedCodeBlock =
        codeBlocks.find((cb) => cb._id === codeBlockId) || null;
      setCodeBlock(selectedCodeBlock);
    }
  }, [codeBlocks, codeBlockId]);

  useEffect(() => {
    if (!codeBlockId) return;
    socketService.setup();

    socketService.joinRoom(codeBlockId);

    socketService.on("update-room-count", setStudentCount);

    return () => {
      socketService.leaveRoom(codeBlockId);
      socketService.terminate();
    };
  }, [codeBlockId]);

  useEffect(() => {
    console.log(studentCount);
  }, [studentCount]);

  const handleCodeChange = () => {
    // console.log(value);
  };
  const toggleSolution = () => {
    setIsSolution(!isSolution);
  };
  if (!codeBlock) return <Loader />;
  return (
    <Wrapper>
      <Container>
        <CodeEditorContainer>
          <TitleContainer>
            <Title>{codeBlock.title}</Title>
            <Indicator>• Student</Indicator>
            <div>{studentCount}</div>
          </TitleContainer>
          <Editors>
            <Editor
              theme="vs-dark"
              height="50vh"
              width={isSolution ? "50%" : "100%"}
              defaultLanguage="javascript"
              defaultValue={codeBlock.initialTemplate}
              //loading is according to the codeblock data above
              loading={<></>}
            />
            {isSolution && (
              <Editor
                theme="vs-dark"
                height="50vh"
                width={isSolution ? "50%" : "100%"}
                defaultLanguage="javascript"
                defaultValue={codeBlock.solution}
                loading={<></>}
              />
            )}
          </Editors>
        </CodeEditorContainer>
        <Button onClick={toggleSolution} variant="contained">
          <ButtonTxt>Solution</ButtonTxt>
        </Button>
      </Container>
    </Wrapper>
  );
};

export default CodeBlockPage;
