import React from "react";
import ReactDOM from "react-dom/client";
import "aos/dist/aos.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./data/routes";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
