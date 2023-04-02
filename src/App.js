import React, { useState, useContext } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={`btn ${darkMode ? "btn-dark" : "btn-light"}`}>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
