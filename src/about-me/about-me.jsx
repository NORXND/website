/*
    src/about-me/about-me.jsx
    --
    About Me page component.

    Written by NORXND
    (C) NORXND 2022
*/
import React, { useEffect } from "react";
import styles from "./about-me.scss";
import main_styles from "../main.scss";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";

function Contact(props) {
  useEffect(() => {
    document.title = props.t("Title-AboutMe");
    props.setPageName("AboutMe");
  });

  return (
    <div className={styles.aboutme_container}>
      <div className={`${main_styles.row} ${styles.aboutme_no_padding_left}`}>
        <div
          className={`${main_styles["col-4"]} ${styles.aboutme_no_padding_left}`}
        >
          <div className={styles.aboutme_header_image}></div>
        </div>
        <div className={`${main_styles["col"]}`}>
          <h1 className={styles.aboutme_title}>{props.t("AboutMe-Title")}</h1>
          <p>
            <Trans i18nKey="AboutMe-Main" t={props.t}>
              I'm NORXND, also known by my real name Norbert. I'm a 15-year-old
              guy living in Koszalin, Poland.
              <br></br>
              I'm a hobbyist programming student. I also sometimes produce music
              and make graphics (You could notice I'm obsessed with CANAL+ and
              other Étienne Robial's work).
              <br></br>
              I'm programming in Python, Lua (and Luau), C# and know the basics
              of JS, I can also do websites both in the traditional way or in
              React. In the future, I want to become a freelancer software
              developer, create games and apps to make people happy.<br></br>I
              sometimes play some games like FE2 (on Roblox), GTA V, Portal 2,
              Subnautica or something else.
              <br></br>You probably know me because I'm a friend of the founder
              and former owner of the popular Roblox game. In 2021, I worked
              with him in the "Inertia" games studio which was eventually
              closed.
              <br></br>From 2020 to this day I'm the director of{" "}
              <a href="https://chojrakdev.cf/">Chojrak Development</a> studio.
              There, I work on Neotrax, a new alternative for certain Roblox
              game I mentioned above.<br></br>
              For now, I'm not open for commissions or jobs but soon, I plan to
              open a website-making commission (Stay tuned for that!).<br></br>
              What am I doing right now? Check the <Link to="/work">
                Work
              </Link>{" "}
              page. Where can you find me? Check the{" "}
              <Link to="/socials">Socials</Link> page.<br></br>I'm a furry. Yes.{" "}
              <br></br>That's all that you should know about me, I think so at
              least. Have any more questions, don't hesitate to contact me, I'm
              very friendly and like to talk with people, alternatively join my{" "}
              <a href="https://discord.com/invite/Vr8rnvGFNQ" target="_blank">
                Discord Server
              </a>
              !
            </Trans>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
