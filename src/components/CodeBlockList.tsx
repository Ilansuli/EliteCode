import styled from "@emotion/styled";
import { TCodeBlock } from "../types";
import CodeBlockCard from "./CodeBlockCard";

const ListContainer = styled.div`
  display: grid;
  gap: 0.5rem;
  padding-block: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
`;

type CodeBlockListProps = {
  codeBlocks: TCodeBlock[];
};

const CodeBlockList: React.FC<CodeBlockListProps> = ({ codeBlocks }) => {
  return (
    <ListContainer>
      {codeBlocks.map((codeBlock) => (
        <CodeBlockCard key={codeBlock._id} codeBlock={codeBlock} />
      ))}
    </ListContainer>
  );
};

export default CodeBlockList;
