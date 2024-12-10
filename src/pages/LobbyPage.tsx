import React from "react";
import styled from "@emotion/styled";
import { CodeBlockList } from "../components";
import { useCodeBlocks } from "../context";
import { Container, Loader as LoaderOrigin } from "../libs";

const Wrapper = styled.div`
  min-height: 100dvh;
`;

const Header = styled.header`
  color: rgba(119, 176, 244, 1);
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
  color: rgba(54, 121, 201, 1);
`;

const Title = styled.h1``;

const SubTitleContainer = styled.div`
  min-width: 300px;
  margin-block: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 700px) {
    max-width: 50%;
  }
`;

const SubTitle = styled.h2``;

const CodeBlocksContainer = styled.section`
  background-color: rgba(54, 121, 201, 1);
  padding-block: 2rem;
`;

const Loader = styled(LoaderOrigin)`
  &.MuiCircularProgress-root {
    color: rgba(23, 23, 23, 1);
  }
`;

const LobbyPage: React.FC = () => {
  const { codeBlocks } = useCodeBlocks();

  return (
    <Wrapper>
      <Header>
        <Container>
          <TitleContainer>
            <ColoredMainTitle>Mentors and students </ColoredMainTitle>
            <Title>coding together</Title>
          </TitleContainer>
          <SubTitleContainer>
            <SubTitle>
              Elite Code provides mentors and students to collaborate and write
              code together in real time.
            </SubTitle>
            <SubTitle>Choose a code block to begin.</SubTitle>
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
