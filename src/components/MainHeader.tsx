import styled from "@emotion/styled";
import { Container, IconButton } from "../libs";
import { ReactComponent as Logo } from "../assets/images/elite.svg";
import { useEffect, useState } from "react";

const Header = styled.header`
  background-color: rgba(0, 0, 0, 0.5);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10);
  padding-block: 1rem;
`;
const LogoIcon = styled(Logo)`
  cursor: pointer;
  width: 40px;
  height: 40px;
`;
const MainHeader: React.FC = () => {
  return (
    <Header>
      <Container>
        <LogoIcon />
      </Container>
    </Header>
  );
};
export default MainHeader;
