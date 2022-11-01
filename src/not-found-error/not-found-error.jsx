/*
    src/not-found-error/not-found-error.jsx
    --
    Not Found (404) error page.

    Written by NORXND
    (C) NORXND 2022
*/
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import styles from "./not-found-error.scss";
import { Trans } from "react-i18next";

// For tags
import og_image from "../assets/images/og_image.png";
import twitter_image from "../assets/images/twitter_image.png";

function Page(props) {
  useEffect(() => {
    props.setPageName("404Error");
  });

  return (
    <React.Fragment>
      <Helmet>
        <link
          rel="canonical"
          href={`https://norxnd.cf${window.location.pathname}`}
        />
        <title>{props.t("Title-404")}</title>
        <meta name="description" content="404 - Page not found! - NORXND" />

        <meta name="og:title" content="About Me - NORXND" />
        <meta name="og:site_name" content="NORXND - Official Website" />
        <meta
          name="og:url"
          content={`https://norxnd.cf${window.location.pathname}`}
        />
        <meta name="og:description" content="404 - Page not found! - NORXND" />
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
        <meta name="twitter:title" content="404 - Not found! - NORXND" />
        <meta
          name="twitter:image"
          content={`https://norxnd.cf${twitter_image}`}
        />
        <meta name="twitter:image:alt" content="NORXND" />
        <meta name="twitter:site" content="@NORXND_Unname" />
        <meta
          name="twitter:description"
          content="404 - Page not found! - NORXND"
        />

        <meta name="theme-color" content="#ffd300"></meta>
      </Helmet>
      <div className={styles.container}>
        <h1 className={styles.title}>{props.t("404-Title")}</h1>
        <img src="https://http.dog/404.webp" />
        <p className={styles.text}>
          <Trans i18nKey="404-Text" t={props.t}>
            Oopsie, our qualified tracking dogs were searching here and there
            but they couldn't find {window.location.pathname} on this website!
            It probably doesn't exist! 😱
          </Trans>
        </p>
      </div>
    </React.Fragment>
  );
}

export default Page;
