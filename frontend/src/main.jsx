import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css"; // ✅ exists
import "./styles/Code.css"; // ✅ exists
import "./styles/AiAssistant.css"; // ✅ exists

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
