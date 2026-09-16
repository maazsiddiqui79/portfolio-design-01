import React from "react";
import styles from "./Details.module.css";

import Connect from "./Connect";
import About from "./About";

export default function Details({ isDarkMode }) {
  return (
    <div
      className={`${styles.Details} ${
        isDarkMode ? styles.dark_details : styles.light_details
      }`}
    >
      <Connect isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
    </div>
  );
}