import React from "react";
import {
  CardContent as MuiCardContent,
  CardMedia as MuiCardMedia,
  CardActionArea,
  CardProps,
  CardHeader as MuiCardHeader,
} from "@mui/material";
import styled from "@emotion/styled";
import { Card } from "../libs";
import { TCodeBlock } from "../types";
import { Link as LinkOrigin } from "react-router-dom";

type CodeBlockCardProps = {
  codeBlock: TCodeBlock;
} & CardProps;

const Link = styled(LinkOrigin)`
  color: rgb(119, 176, 244, 1);
  text-decoration: none;
`;

const CardContent = styled(MuiCardContent)`
  display: grid;
  height: 200px;
  background-color: rgb(23 23 23);
  gap: 1rem;
`;

const Title = styled.h3`
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
