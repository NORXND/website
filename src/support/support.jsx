/*
    src/support/support.jsx
    --
    Support Me page (basically index with links to Ko-Fi, Patreon etc.

    Written by NORXND
    (C) NORXND 2022
*/
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import styles from "./support.scss";
import main_styles from "../main.scss";

// For tags
import og_image from "../assets/images/og_image.png";
import twitter_image from "../assets/images/twitter_image.png";

function Support(props) {
  useEffect(() => {
    props.setPageName("Support");
  });

  return (
    <React.Fragment>
      <Helmet>
        <link rel="canonical" href="https://norxnd.cf/support" />
        <title>{props.t("Title-Support")}</title>
        <meta
          name="description"
          content="Official Support (Donation) Page for NORXND."
        />

        <meta name="og:title" content="Support - NORXND" />
        <meta name="og:site_name" content="NORXND - Official Website" />
        <meta name="og:url" content="https://norxnd.cf/support" />
        <meta
          name="og:description"
          content="Official Support (Donation) Page for NORXND."
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
        <meta name="twitter:title" content="Support - NORXND" />
        <meta
          name="twitter:image"
          content={`https://norxnd.cf${twitter_image}`}
        />
        <meta name="twitter:image:alt" content="NORXND" />
        <meta name="twitter:site" content="@NORXND_Unname" />
        <meta
          name="twitter:description"
          content="Official Support (Donation) Page for NORXND."
        />

        <meta name="theme-color" content="#ffd300"></meta>
      </Helmet>
      <div className={styles.container}>
        <h1 className={styles.title}>{props.t("Support-Title")}</h1>
        <p>{props.t("Support-Description")}</p>
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
              <h3>{props.t("Support-Patron")}</h3>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Support;
