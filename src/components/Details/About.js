import React from "react";
import styles from "./About.module.css";

export default function About({ isDarkMode }) {
  return (
    <div
      className={`${styles.about} ${
        isDarkMode ? styles.dark_about : styles.light_about
      }`}
    >
      <div className={styles.about_heading}>
        <span className={styles.number}>03</span>
        <span>ABOUT</span>
      </div>

      <p className={styles.about_text}>
        I'm <strong>Maaz Siddiqui</strong>, a{" "}
        <strong>Computer Engineering student and Full-Stack Developer</strong>{" "}
        focused on <strong>building scalable web applications</strong> and
        solving real-world problems with clean, structured code. I work with{" "}
        <strong>Python, JavaScript, Java, React, Django, Flask, and Git</strong>,
        while exploring <strong>AI, automation, and modern web technologies</strong>.
        I completed my <strong>Diploma in Computer Engineering</strong> from{" "}
        <strong>MHSSP</strong> and am currently pursuing my{" "}
        <strong>B.E. in Computer Engineering at TCET, Kandivali.</strong>
      </p>
    </div>
  );
}