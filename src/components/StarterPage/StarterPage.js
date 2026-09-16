import React from "react";
import styles from "./StarterPage.module.css";

function StarterPage() {
  return (
    <div className={styles.starter_page}>
      <p className={styles.intro_txt}>
        Click anywhere or press any key to begin
      </p>

      <p className={styles.slogan_txt}>Explore my work.</p>
    </div>
  );
}

export default StarterPage;
