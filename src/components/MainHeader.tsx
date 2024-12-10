import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { Container } from "../libs";
import { ReactComponent as Logo } from "../assets/images/elite.svg";
import { SvgIcon } from "@mui/material";

const Header = styled.header`
  background-color: rgba(23, 23, 23, 0.5);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  padding-block: 1rem;
`;
const LogoIcon = styled(Logo)`
  cursor: pointer;
  width: 40px;
  height: 40px;
`;
const MainHeader: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Header>
      <Container>
        <LogoIcon onClick={() => navigate("/")} />
      </Container>
    </Header>
  );
};
export default MainHeader;
