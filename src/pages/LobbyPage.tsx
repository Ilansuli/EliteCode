import React from "react";
import styled from "@emotion/styled";
import { CodeBlockList } from "../components";
import { useCodeBlocks } from "../context/CodeBlockContext";
import { Container, Loader } from "../libs";

const Wrapper = styled.div`
  min-height: 100dvh;
`;

const Header = styled.header`
  background: black;
  color: rgb(216 246 250);
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

const ColoredTitle = styled.h1`
  color: lightblue;
`;

const Title = styled.h1``;

const SubTitleContainer = styled.div`
  min-width: 300px;
  margin-block: 2rem;
  @media (min-width: 700px) {
    max-width: 50%;
  }
`;

const CodeBlocksContainer = styled.section`
  background-color: rgba(255, 255, 255, 1);
`;
const SubTitle = styled.h2``;

const LobbyPage: React.FC = () => {
  const { codeBlocks } = useCodeBlocks();
  return (
    <Wrapper>
      <Header>
        <Container>
          <TitleContainer>
            <ColoredTitle>Teachers and students </ColoredTitle>
            <Title>coding together</Title>
          </TitleContainer>
          <SubTitleContainer>
            <SubTitle>
              Elite Code provides teachers and students to collaborate and write
              code together in real time
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
