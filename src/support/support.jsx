/*
    src/support/support.jsx
    --
    Support Me page (basically index with links to Ko-Fi, Patreon etc.

    Written by NORXND
    (C) NORXND 2022
*/
import React from "react";
import styles from "./support.scss";
import main_styles from "../main.scss";

function Support(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Support Me!</h1>
      <p>
        There are various ways to support my work. If you don't have money, you
        can simply play my games, subscribe to my YouTube channel and give a
        follow on Twitter (and SoundCloud for example), give a like to a post,
        video or track, join our community server! If you want to directly
        support me financially, you can use a few services below:
      </p>
      <div className={main_styles.row}>
        <div className={main_styles.col}>
          <iframe
            id="kofiframe"
            src="https://ko-fi.com/norxnd/?hidefeed=true&widget=true&embed=true&preview=true"
            style={{
              border: "none",
              width: "100%",
              height: "562px",
              background: "var(--color-foreground)",
            }}
            title="norxnd"
          ></iframe>
        </div>
        <div className={main_styles.col}>
          <a href="https://www.patreon.com/bePatron?u=33310462">
            <h3>or become a Patron!</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Support;
