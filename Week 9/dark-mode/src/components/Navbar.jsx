import React, { useState } from "react";
import useDarkMode from "../hooks/useDarkMode";
import "../styles.scss";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  console.log("Dakr mode", darkMode);
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={!darkMode ? "dark-mode toggle" : "toggle toggled"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
