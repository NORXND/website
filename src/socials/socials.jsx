/*
    src/socials/socials.jsx
    --
    Socials page component.

    Written by NORXND
    (C) NORXND 2022
*/
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import styles from "./socials.scss";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import socials_config from "./socials.json";

// For tags
import og_image from "../assets/images/og_image.png";
import twitter_image from "../assets/images/twitter_image.png";

import {
  Twitter,
  Facebook,
  YouTube,
  Github,
  SoundCloud,
  Roblox,
} from "./icons";

const icons_config = {
  Twitter: <Twitter />,
  Facebook: <Facebook />,
  YouTube: <YouTube />,
  Github: <Github />,
  SoundCloud: <SoundCloud />,
  Roblox: <Roblox />,
};

function Socials(props) {
  useEffect(() => {
    props.setPageName("Socials");
  });
  const content = [];

  for (const cat in socials_config) {
    const data = socials_config[cat];
    const list = [];

    for (const item in data.Items) {
      list.push(
        <li className={styles.socials_category_list_item_container} key={item}>
          <a
            className={styles.socials_category_list_item}
            href={data.Items[item].Link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.socials_category_list_item_element}>
              {icons_config[data.Items[item].Icon]}
            </div>
            <div className={styles.socials_category_list_item_element}>
              {props.t(data.Items[item].Name)}
            </div>
            <div className={styles.socials_category_list_item_element}>—</div>
            <div className={styles.socials_category_list_item_element}>
              {data.Items[item].Value}
            </div>
          </a>
        </li>
      );
    }

    content.push(
      <div className={styles.socials_category_container} key={cat}>
        <h3 className={styles.socials_category_title}>{props.t(data.Name)}</h3>
        <p className={styles.socials_category_description}>
          {props.t(data.Description)}
        </p>
        <ul className={styles.socials_category_list}>{list}</ul>
      </div>
    );
  }

  return (
    <React.Fragment>
      <Helmet>
        <link rel="canonical" href="https://norxnd.cf/socials" />
        <title>{props.t("Title-Socials")}</title>
        <meta name="description" content="Official Socials Page for NORXND." />

        <meta name="og:title" content="Socials - NORXND" />
        <meta name="og:site_name" content="NORXND - Official Website" />
        <meta name="og:url" content="https://norxnd.cf/socials" />
        <meta
          name="og:description"
          content="Official Socials Page for NORXND."
        />
        <meta name="og:image" content={`https://norxnd.cf${og_image}`} />
        <meta
          property="og:image:secure_url"
          content={`https://norxnd.cf${og_image}`}
        />
        <meta name="og:image:width" content="1200" />
        <meta name="og:image:height" content="627" />
        <meta name="og:image:alt" content="NORXND" />
        <meta name="og:type" content="website" />
        <meta name="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Socials - NORXND" />
        <meta
          name="twitter:image"
          content={`https://norxnd.cf${twitter_image}`}
        />
        <meta name="twitter:image:alt" content="NORXND" />
        <meta name="twitter:site" content="@NORXND_Unname" />
        <meta
          name="twitter:description"
          content="Official Socials Page for NORXND."
        />

        <meta name="theme-color" content="#ffd300"></meta>
      </Helmet>
      <div className={styles.socials_container}>
        <h1 className={styles.socials_title}>{props.t("Socials-Title")}</h1>
        {content}
        <p className={styles.socials_notice}>
          <Trans i18nKey="Socials-Notice" t={props.t}>
            Make sure you choose platform I often check when{" "}
            <Link className={styles.socials_notice_link} to="/contact">
              contacting me
            </Link>
            !<br></br>You can just search for{" "}
            <span className={styles.socials_notice_highlight}>NORXND</span> and
            white dog's face to find me somewhere!
          </Trans>
        </p>
      </div>
    </React.Fragment>
  );
}

export default Socials;
