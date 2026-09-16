import React, { useState, useEffect } from "react";
import StarterPage from "./components/StarterPage/StarterPage";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Details from "./components/Details/Details";
import TechStack from "./components/TechStack/TechStack";
import Footer from "./components/Footer/Footer";
import "./App.css";

export default function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleKeyPress = () => {
      setIsStarted(true);
    };

    window.addEventListener("keypress", handleKeyPress);
    window.addEventListener("click", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
      window.removeEventListener("click", handleKeyPress);
    };
  }, []);

  return (
    <div
      className={`App ${
        isDarkMode ? "dark-mode" : "light-mode"
      } ${!isStarted ? "starter-pg" : ""}`}
    >
      {!isStarted ? (
        <StarterPage />
      ) : (
        <div className="real-website">
          <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <Hero isDarkMode={isDarkMode} />
          <hr className="line" />
          <Details isDarkMode={isDarkMode} />
          <TechStack isDarkMode={isDarkMode} />
          <Footer isDarkMode={isDarkMode} />
        </div>
      )}
    </div>
  );
}
