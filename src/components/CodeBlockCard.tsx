import React from "react";
import {
  CardContent as MuiCardContent,
  CardMedia as MuiCardMedia,
  CardActionArea,
  CardProps,
} from "@mui/material";
import styled from "@emotion/styled";
import { Card } from "../libs";
import { TCodeBlock } from "../types";
import { Link } from "react-router-dom";

type CodeBlockCardProps = {
  codeBlock: TCodeBlock;
} & CardProps;

const CardMedia = styled(MuiCardMedia)`
  background-position: top, center;
  aspect-ratio: 1/1.2;
  display: grid;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: var(--system-common-gap-small);
`;

const CardContent = styled(MuiCardContent)`
  display: grid;
  gap: 1rem;
`;

const Title = styled.p`
  height: 46px;
  align-self: start;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const CodeBlockCard: React.FC<CodeBlockCardProps> = ({
  codeBlock,
  ...props
}) => {
  return (
    <Link to={`/code/${codeBlock._id}`}>
      <Card {...props}>
        <CardActionArea>
          <CardContent>
            <Title>{codeBlock.title}</Title>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default CodeBlockCard;
