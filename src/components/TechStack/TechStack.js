import React, { useState } from "react";
import styles from "./TechStack.module.css";

export default function TechStack({ isDarkMode }) {
  const [likedTech, setLikedTech] = useState([]);
  const techStack = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Java",
    "Python",
    "Flask",
    "Django",
    "Git",
    "GitHub",
    "AWS",
    "OOPS",
    "DSA",
    "Postman",
    "Supabase",
    "Mysql",
    "Linux",
    "Vibe Coding",
    "Web Scraping ",
  ];
  const handleLike = (index) => {
    if (likedTech.includes(index)) {
      setLikedTech(likedTech.filter((item) => item !== index));
    } else {
      setLikedTech([...likedTech, index]);
    }
  };

  return (
    <div
      className={`${styles.connect} ${
        isDarkMode ? styles.dark_connect : styles.light_connect
      }`}
    >
      <div className={styles.connect_heading}>
        <span className={styles.number}>03</span>
        <span>TECH STACK</span>
      </div>
      <p className={styles.tools_len}>
        <div className={styles.tech_left_div}>TECHNOLOGIES</div>
        <div className={styles.tech_right_div}>{techStack.length} Tools</div>
      </p>

      <div className={styles.tech_stack}>
        {techStack.map((techName, index) => (
          <span className={styles.btn_container} key={index}>
            {techName}

            <svg
              className={styles.like_btn}
              onClick={() => handleLike(index)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill={likedTech.includes(index) ? "currentColor" : "none"}
              stroke="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
            </svg>
          </span>
        ))}
      </div>
<p>Like count: {likedTech.length}</p>    </div>
  );
}
