import React from "react";
import ReactDOM from "react-dom/client";
import "aos/dist/aos.css";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
