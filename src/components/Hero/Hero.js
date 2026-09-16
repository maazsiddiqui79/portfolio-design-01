import React from "react";
import myimg from "../assets/myimage.png";
import styles from "./Hero.module.css";

export default function Hero({ isDarkMode }) {
  return (
    <div
      className={`${styles.Hero} ${
        isDarkMode ? styles.dark_header : styles.light_header
      }`}
    >

      <div className={styles.location_info}>
        <span className={styles.location}>
          Mumbai, Maharashtra
        </span>

        <span className={styles.capsule}>
          <span className={styles.dot}></span>
          2nd Year B.E.

          <span className={styles.separator}></span>

          
          
        </span>
      </div>


      <div className={styles.image_wrapper}>
        <img
          src={myimg}
          className={styles.hero_image}
          alt="Maaz Siddiqui"
        />
      </div>


      <div className={styles.name_area}>
        <p className={styles.at_name}>
          01 @ <span>Maaz Siddiqui</span>
        </p>

        <h1 className={styles.name}>
          Maaz Siddiqui
        </h1>
      </div>

    </div>
  );
}