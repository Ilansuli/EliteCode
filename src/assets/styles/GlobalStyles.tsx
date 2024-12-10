import React from "react";
import { GlobalStyles as MuiGlobalStyles, useTheme } from "@mui/material";

const GlobalStyles: React.FC = () => {
  const theme = useTheme();
  const { palette, typography } = theme;
  return (
    <MuiGlobalStyles
      styles={{
        "*": {
          boxSizing: "border-box",
          scrollbarWidth: "thin",
          scrollbarColor: `${palette.secondary.dark} ${palette.secondary.main}`,
        },
        "*::before": {
          boxSizing: "border-box",
        },
        "*::after": {
          boxSizing: "border-box",
        },
        "*::-webkit-scrollbar": {
          width: "0.375rem",
        },
        body: {
          color: palette.primary.main,
          backgroundColor: palette.background,
          fontFamily: typography.fontFamily,
          lineHeight: 1.35,
          margin: 0,
          padding: 0,
        },
        ul: {
          margin: 0,
          padding: 0,
        },
        p: {
          margin: 0,
          padding: 0,
        },
        hr: {
          margin: 0,
          padding: 0,
        },
        li: {
          listStyle: "none",
        },
        h1: {
          margin: 0,
          padding: 0,
        },
        h2: {
          margin: 0,
          padding: 0,
        },
        h3: {
          margin: 0,
          padding: 0,
        },
        h4: {
          margin: 0,
          padding: 0,
        },
        h5: {
          margin: 0,
          padding: 0,
        },
        h6: {
          margin: 0,
          padding: 0,
        },
        img: {
          maxWidth: "100%",
        },
      }}
    />
  );
};

export default GlobalStyles;
