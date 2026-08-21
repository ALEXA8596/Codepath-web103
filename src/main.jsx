import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import "./index.css";
import "@picocss/pico/css/pico.min.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <nav
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <a href="/">
          Home
        </a>
        <a href="/add">
          Add
        </a>
      </nav>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
