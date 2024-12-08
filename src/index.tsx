import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import App from "./App";
import { CodeBlocksProvider } from "./context/CodeBlockContext";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <CodeBlocksProvider>
      <App />
    </CodeBlocksProvider>
  );
} else {
  console.error("Root element not found");
}
