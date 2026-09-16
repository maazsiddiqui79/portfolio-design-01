import React from "react";
import styles from "./Connect.module.css";

export default function Connect({ isDarkMode }) {
  const all_links = [
    "mailto:siddiqui.maaz79@gmail.com",
    "https://github.com/maazsiddiqui79",
    "https://the-maaz-portfolio.vercel.app/",
    "https://www.linkedin.com/in/siddiqui-maazzz/",
    "https://www.instagram.com/siddiqui.maazzz/",
    "https://x.com/siddiquimaazzz",
    "https://www.snapchat.com/@siddiqui.maazzz",
    "https://leetcode.com/u/siddiqui-maaz79/",
    "https://discord.com/users/760879100495265814",
    "https://api.whatsapp.com/send/?phone=918850281310&text&type=phone_number&app_absent=0",
  ];

  const all_links_name = [
    "Email",
    "Github",
    "Portfolio",
    "Linkedin",
    "Instagram",
    "X",
    "Snapchat",
    "Leetcode",
    "Discord",
    "Whatsapp",
  ];

  return (
    <div
      className={`${styles.connect} ${
        isDarkMode ? styles.dark_connect : styles.light_connect
      }`}
    >
      <div className={styles.connect_heading}>
        <span className={styles.number}>02</span>
        <span>CONNECT</span>
      </div>

      <div className={styles.all_linkss}>
        {all_links.map((link, index) => (
          <a
            href={link}
            className={styles.btn_container}
            key={index}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => {
              if (
                !window.confirm(
                  `Are you sure you want to go to ${all_links_name[index]}?\nYou are leaving this website.`,
                )
              ) {
                e.preventDefault();
              }
            }}
          >
            {all_links_name[index]}
          </a>
        ))}
      </div>
    </div>
  );
}
