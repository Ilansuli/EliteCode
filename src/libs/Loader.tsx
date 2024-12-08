import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import styled from "@emotion/styled";

const LoaderContainer = styled.div`
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader: React.FC = () => {
  return (
    <LoaderContainer>
      <CircularProgress />
    </LoaderContainer>
  );
};

export default Loader;
