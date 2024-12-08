// Router.js (or Routes.js)
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AppDesktopHeader, AppMobileFooter } from "./cmps";
import { LobbyPage, CodeBlockPage } from "./pages";

const AppRouter = () => {
  return (
    <Router>
      <AppDesktopHeader />
      <main>
        <Routes>
          <Route path="/" element={<LobbyPage />} />
          <Route path="/about" element={<CodeBlockPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <AppMobileFooter />
    </Router>
  );
};

export default AppRouter;
