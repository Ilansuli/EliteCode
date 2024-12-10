import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";
import httpService from "../services/http.service";
import { TCodeBlock } from "../types";

export type TCodeBlockContext = {
  codeBlocks: TCodeBlock[] | null;
};

const CodeBlockContext = createContext<TCodeBlockContext | null>(null);

export const CodeBlocksProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [codeBlocks, setCodeBlocks] = useState<TCodeBlock[] | null>(null);

  useEffect(() => {
    const fetchCodeBlocks = async () => {
      try {
        const result = await httpService.get("codeBlock");
        setCodeBlocks(result);
      } catch (error) {
        console.error("Failed to fetch code blocks", error);
      }
    };
    fetchCodeBlocks();
  }, []);

  return (
    <CodeBlockContext.Provider value={{ codeBlocks }}>
      {children}
    </CodeBlockContext.Provider>
  );
};

const useCodeBlocks = (): TCodeBlockContext => {
  const context = useContext(CodeBlockContext);
  if (!context) {
    throw new Error("useCodeBlocks must be used within a CodeBlocksProvider");
  }
  return context;
};

export default useCodeBlocks;
