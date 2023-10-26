import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // Import your CSS file if applicable

const root = document.getElementById("root");
const reactRoot = createRoot(root);
reactRoot.render(<App />);
