import React from "react";
import styled from "@emotion/styled";
import { CodeBlockList } from "../components";
import { useCodeBlocks } from "../context/CodeBlockContext";
import { Container, Loader } from "../libs";

const Wrapper = styled.div`
  min-height: 100dvh;
`;

const Header = styled.header`
  color: rgb(119, 176, 244, 1);
  text-align: center;
  @media (min-width: 700px) {
    text-align: unset;
  }
`;

const TitleContainer = styled.div`
  margin-block: 2rem;
  & > h1 {
    font-size: 4em;
  }
`;

const ColoredMainTitle = styled.h1`
  color: rgb(54 121 201);
`;

const Title = styled.h1``;

const SubTitleContainer = styled.div`
  min-width: 300px;
  margin-block: 2rem;
  @media (min-width: 700px) {
    max-width: 50%;
  }
`;

const SubTitle = styled.h2``;

const CodeBlocksContainer = styled.section`
  background-color: rgb(54 121 201);
  padding-block: 2rem;
`;

const LobbyPage: React.FC = () => {
  const { codeBlocks } = useCodeBlocks();
  return (
    <Wrapper>
      <Header>
        <Container>
          <TitleContainer>
            <ColoredMainTitle>Teachers and students </ColoredMainTitle>
            <Title>coding together</Title>
          </TitleContainer>
          <SubTitleContainer>
            <SubTitle>
              Elite Code provides teachers and students to collaborate and write
              code together in real time. Choose a code block to begin
            </SubTitle>
          </SubTitleContainer>
        </Container>
      </Header>
      <CodeBlocksContainer>
        <Container>
          {!codeBlocks ? <Loader /> : <CodeBlockList codeBlocks={codeBlocks} />}
        </Container>
      </CodeBlocksContainer>
    </Wrapper>
  );
};

export default LobbyPage;
