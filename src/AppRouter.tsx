import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { MainHeader } from "./components";
import { LobbyPage, CodeBlockPage } from "./pages";
import { ScrollToTop } from "./libs";

const AppRouter: React.FC = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <MainHeader />
        <Routes>
          <Route path="/" element={<LobbyPage />} />
          <Route path="/code/:id" element={<CodeBlockPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
