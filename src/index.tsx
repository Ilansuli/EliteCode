import ReactDOM from "react-dom/client";
// import "./assets/styles/index.css";
import App from "./App";
import { CodeBlocksProvider } from "./context/CodeBlockContext";
import { ModalProvider } from "./context/ModalContext";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme, GlobalStyles } from "./assets/styles";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <CodeBlocksProvider>
      <ModalProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </ModalProvider>
    </CodeBlocksProvider>
  );
} else {
  console.error("Root element not found");
}
