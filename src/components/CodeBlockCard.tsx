import { useNavigate } from "react-router-dom";
import {
  CardContent as MuiCardContent,
  CardActionArea,
  CardProps,
  Card,
} from "@mui/material";
import styled from "@emotion/styled";
import { TCodeBlock } from "../types";

type CodeBlockCardProps = {
  codeBlock: TCodeBlock;
} & CardProps;

const CardContent = styled(MuiCardContent)`
  display: grid;
  height: 200px;
  gap: 1rem;
`;

const Title = styled.h3`
  align-self: start;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const CodeBlockCard: React.FC<CodeBlockCardProps> = ({ codeBlock }) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => {
        navigate(`/code/${codeBlock._id}`);
      }}
    >
      <CardActionArea>
        <CardContent>
          <Title>{codeBlock.title}</Title>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CodeBlockCard;
