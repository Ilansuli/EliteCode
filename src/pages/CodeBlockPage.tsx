import React, { useEffect, useState } from "react";
import { useCodeBlocks } from "../context/CodeBlockContext";
import { useParams } from "react-router-dom";
import { Container, Loader } from "../libs";
import { Editor } from "@monaco-editor/react";
import { TCodeBlock } from "../types";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 1);
`;

const CodeEditorContainer = styled.main``;

const CodeBlockTitle = styled.h1``;

const CodeBlockPage: React.FC = () => {
  const { codeBlocks } = useCodeBlocks();
  const { id } = useParams();
  const [codeBlock, setCodeBlock] = useState<TCodeBlock | null>(null);

  useEffect(() => {
    if (codeBlocks) {
      const selectedCodeBlock = codeBlocks.find((cb) => cb._id === id) || null;
      setCodeBlock(selectedCodeBlock);
    }
  }, [codeBlocks, id]);

  const handleCodeChange = () => {
    // console.log(value);
  };

  if (!codeBlock) return <Loader />;
  return (
    <Wrapper>
      <Container>
        <CodeEditorContainer>
          <CodeBlockTitle>{codeBlock.title}</CodeBlockTitle>
          <Editor
            theme="vs-dark"
            height="90vh"
            defaultLanguage="javascript"
            defaultValue={codeBlock.initialTemplate}
          />
          ;
        </CodeEditorContainer>
      </Container>
    </Wrapper>
  );
};

export default CodeBlockPage;
