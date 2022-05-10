import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import "tw-elements";
import "./index.css";
const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
