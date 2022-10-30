/*
    src/contact/contact.jsx
    --
    Contact page component.

    Written by NORXND
    (C) NORXND 2022
*/
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import styles from "./contact.scss";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import contacts_config from "./contacts.json";

// For tags
import og_image from "../assets/images/og_image.png";
import twitter_image from "../assets/images/twitter_image.png";

import { Discord, EMail, Messenger, Twitter } from "./icons";

const icons_config = {
  Discord: <Discord />,
  EMail: <EMail />,
  Messenger: <Messenger />,
  Twitter: <Twitter />,
};

function Contact(props) {
  useEffect(() => {
    props.setPageName("Contact");
  });
  const contacts = [];

  for (const contact in contacts_config) {
    contacts.push(
      <li className={styles.contacts_list_item_container} key={contact}>
        <a
          className={styles.contacts_list_item}
          href={contacts_config[contact].Link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.contacts_list_item_element}>
            {icons_config[contacts_config[contact].Icon]}
          </div>
          <div className={styles.contacts_list_item_element}>
            {props.t(contacts_config[contact].Name)}
          </div>
          <div className={styles.contacts_list_item_element}>—</div>
          <div className={styles.contacts_list_item_element}>
            {contacts_config[contact].Value}
          </div>
        </a>
      </li>
    );
  }
  return (
    <React.Fragment>
      <Helmet>
        <link rel="canonical" href="https://norxnd.cf/contact" />
        <title>{props.t("Title-Contact")}</title>
        <meta name="description" content="Official Contact Page for NORXND." />

        <meta name="og:title" content="Contact - NORXND" />
        <meta name="og:site_name" content="NORXND - Official Website" />
        <meta name="og:url" content="https://norxnd.cf/contact" />
        <meta
          name="og:description"
          content="Official Contact Page for NORXND."
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
        <meta name="twitter:title" content="Contact - NORXND" />
        <meta
          name="twitter:image"
          content={`https://norxnd.cf${twitter_image}`}
        />
        <meta name="twitter:image:alt" content="NORXND" />
        <meta name="twitter:site" content="@NORXND_Unname" />
        <meta
          name="twitter:description"
          content="Official Contact Page for NORXND."
        />

        <meta name="theme-color" content="#ffd300"></meta>
      </Helmet>
      <div className={styles.contact_container}>
        <h1 className={styles.contact_title}>{props.t("Contact-Title")}</h1>
        <ul className={styles.contacts_list}>{contacts}</ul>
        <p>
          <Trans i18nKey="Contact-Notice" t={props.t}>
            Some of my{" "}
            <Link className={styles.contacts_notice_link} to="/socials">
              social media platforms
            </Link>{" "}
            got an option to send a message. You can also contact me that way!
            Just note, I will answer faster if you use sites listed above ;)
          </Trans>
        </p>
      </div>
    </React.Fragment>
  );
}

export default Contact;
