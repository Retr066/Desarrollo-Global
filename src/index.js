import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { App } from "./App";
import ColorModeProvider from "./context/ColorModeContext";
import "./index.css";
const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <ColorModeProvider>
      <App />
    </ColorModeProvider>
  </React.StrictMode>
);
