import { useState, useEffect } from "react";

import "../css/ThemeToggler.css";
import moonWhite from "../images/moonWhite.png";
import sunBlack from "../images/sunBlack.png";

export default function ThemeToggle() {

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", JSON.stringify(true))
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", JSON.stringify(false))
    }
  }, [darkMode]);

  return (
    <button className="view-mode-toggle-button" onClick={() => setDarkMode(!darkMode)}>
      <img src={darkMode ? moonWhite : sunBlack} alt="Mode" />
    </button>
  );
}
