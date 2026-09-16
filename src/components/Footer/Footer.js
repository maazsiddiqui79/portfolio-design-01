import React from "react";
import styles from "./Footer.module.css";

export default function Footer({ isDarkMode, setIsDarkMode }) {
  return (
    <div className={`${isDarkMode ? styles.dark_header : styles.light_header}`}>
      <p className={`${isDarkMode ? styles.dark_name : styles.light_name}`}>
        Designed & Built with ♥ by Maaz Siddiqui
      </p>

      <span
        className={`${isDarkMode ? styles.dark_mode : styles.light_mode} ${styles.muted}`}
      >
        &copy; {new Date().getFullYear()} | All rights reserved.
      </span>
    </div>
  );
}
