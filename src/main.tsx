import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./styles/index.css";
import { MatchProvider } from "../src/app/components/context/MatchContext";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MatchProvider>
      <App />
    </MatchProvider>
  </React.StrictMode>
);
