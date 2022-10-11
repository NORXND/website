/*
    src/work/work.jsx
    --
    Work page component.

    Written by NORXND
    (C) NORXND 2022
*/
import React, { useEffect } from "react";
import styles from "./work.scss";
import main_styles from "../main.scss";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";

import { cpt, wt, mt, ost } from "./templates";

function Thumbnail(props) {
  return (
    <a
      className={styles.thumbnail_container}
      href={props.Link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className={styles.thumbnail}
        key={props.Name}
        id={props.Name}
        style={{
          backgroundImage: `url(${props.Image})`,
        }}
      >
        <small className={styles.thumbnail_text}>{props.Description}</small>
      </div>
    </a>
  );
}

function Work(props) {
  useEffect(() => {
    document.title = props.t("Title-Work");
    props.setPageName("Work");
  });

  // Current Work
  const current_projects = [];
  for (const project in cpt) {
    current_projects.push(
      <Thumbnail
        Name={project}
        Image={cpt[project].Image}
        Description={cpt[project].Description}
        Link={cpt[project].Link}
        key={project}
      />
    );
  }

  // Current Work
  const websites = [];
  for (const website in wt) {
    websites.push(
      <Thumbnail
        Name={website}
        Image={wt[website].Image}
        Description={wt[website].Description}
        Link={wt[website].Link}
        key={website}
      />
    );
  }

  // Misc
  const misc = [];
  for (const entry in mt) {
    misc.push(
      <Thumbnail
        Name={entry}
        Image={mt[entry].Image}
        Description={mt[entry].Description}
        Link={mt[entry].Link}
        key={entry}
      />
    );
  }

  // Old Stuff
  const old_stuff = [];
  for (const entry in ost) {
    old_stuff.push(
      <Thumbnail
        Name={entry}
        Image={ost[entry].Image}
        Description={ost[entry].Description}
        Link={ost[entry].Link}
        key={entry}
      />
    );
  }

  return (
    <div className={styles.work_container}>
      <h1 className={styles.main_title}>{props.t("Work-Title")}</h1>
      <div className={main_styles.row}>
        <div className={main_styles.col}>
          <h3 className={styles.cat_title}>
            {props.t("Work-CurrentProjects")}
          </h3>
          <div className={styles.scrollable_grid}>{current_projects}</div>
        </div>
        <div className={main_styles.col}>
          <h3 className={styles.cat_title}>{props.t("Work-Websites")}</h3>
          <div className={styles.scrollable_grid}>{websites}</div>
        </div>
      </div>
      <div className={main_styles.row}>
        <div className={main_styles.col}>
          <h3 className={styles.cat_title}>{props.t("Work-Misc")}</h3>
          <div className={styles.scrollable_grid}>{misc}</div>
        </div>
        <div className={main_styles.col}>
          <h3 className={styles.cat_title}>{props.t("Work-Old")}</h3>
          <div className={styles.scrollable_grid}>{old_stuff}</div>
        </div>
      </div>
    </div>
  );
}

export default Work;
