import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import styled from "@emotion/styled";

const LoaderContainer = styled.div`
  &.MuiCard-root {
    background: var(--component-card-elevation-1);
    color: var(--system-common-body);
  }
`;

const Loader: React.FC = () => {
  return (
    <LoaderContainer>
      <CircularProgress />
    </LoaderContainer>
  );
};

export default Loader;
