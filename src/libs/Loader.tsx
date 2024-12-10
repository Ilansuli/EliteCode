import React from "react";
import { CircularProgress, CircularProgressProps } from "@mui/material";
import styled from "@emotion/styled";

const LoaderContainer = styled.div`
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader: React.FC<CircularProgressProps> = ({ sx, ...props }) => {
  return (
    <LoaderContainer>
      <CircularProgress sx={sx as any} {...props} />
    </LoaderContainer>
  );
};

export default Loader;
