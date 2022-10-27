/*
    src/index.jsx
    --
    Entry file for the app.

    Written by NORXND
    (C) NORXND 2022
*/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ReactDOM from "react-dom/client";
import styles from "./main.scss";
import Cookies from "js-cookie";
import React, { useEffect, useState, Suspense, lazy } from "react";
import "./i18n/config";

// Import components
const Navbar = React.lazy(() =>
  import(
    /* webpackChunkName: "navbar" */
    /* webpackPreload: true */
    "./navbar/navbar"
  )
);

const Footer = React.lazy(() =>
  import(
    /* webpackChunkName: "footer" */
    /* webpackPreload: true */
    "./footer/footer"
  )
);

const CookiesConsent = React.lazy(() =>
  import(
    /* webpackChunkName: "cookie-consent" */
    /* webpackPreload: true */
    "./cookies-consent/cookies-consent"
  )
);

// Pages
const Home = React.lazy(() =>
  import(
    /* webpackChunkName: "home" */
    /* webpackFetch: true */
    "./home/home"
  )
);

const AboutMe = React.lazy(() =>
  import(
    /* webpackChunkName: "aboutme" */
    /* webpackFetch: true */
    "./about-me/about-me"
  )
);

const Work = React.lazy(() =>
  import(
    /* webpackChunkName: "work" */
    /* webpackFetch: true */
    "./work/work"
  )
);

const Socials = React.lazy(() =>
  import(
    /* webpackChunkName: "contact" */
    /* webpackFetch: true */
    "./socials/socials"
  )
);

const Contact = React.lazy(() =>
  import(
    /* webpackChunkName: "contact" */
    /* webpackFetch: true */
    "./contact/contact"
  )
);

const Support = React.lazy(() =>
  import(
    /* webpackChunkName: "support" */
    /* webpackFetch: true */
    "./support/support"
  )
);

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error.toString() };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ margin: "auto", width: "fit-content" }}>
          <h1 style={{ color: "#dc3545" }}>:(</h1>
          <h2>Something went wrong!</h2>
          <p>
            An error occurred while rendering the app!
            <br></br>
            Please look into the dev console for more information!
          </p>
          <small>{this.state.error}</small>
        </div>
      );
    }
    return this.props.children;
  }
}

// Specify theme and language
let cookie_consent_status = Cookies.get("cookie-consent");
let default_language = "en";
let default_theme = "dark";

if (Cookies.get("lang") != null && cookie_consent_status) {
  default_language = Cookies.get("lang");
}

if (
  new URL(window.location.href).searchParams.get("lang") != null &&
  cookie_consent_status
) {
  default_language = new URL(window.location.href).searchParams.get("lang");
  Cookies.set("lang", default_language, {
    sameSite: "Lax",
    expires: 3650,
  });
}

if (Cookies.get("theme") != null) {
  default_theme = Cookies.get("theme");
}

function App(props) {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState(default_theme);
  const [pageName, setPageName] = useState("");

  useEffect(() => {
    i18n.changeLanguage(default_language);
  }, []);

  useEffect(() => {
    // Set dark / light mode
    if (theme == "dark") {
      document.body.className = styles._dark_theme;
      if (cookie_consent_status) {
        Cookies.set("theme", "dark", {
          sameSite: "Lax",
          expires: 3650,
        });
      }
    } else {
      document.body.className = styles._light_theme;
      if (cookie_consent_status) {
        Cookies.set("theme", "light", {
          sameSite: "Lax",
          expires: 3650,
        });
      }
    }
  }, [theme]);

  return (
    <Router>
      <Navbar
        t={t}
        i18n={i18n}
        theme={theme}
        setTheme={setTheme}
        pageName={pageName}
      />
      {!cookie_consent_status && <CookiesConsent />}
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div className={styles.loading}></div>}>
              <Home t={t} i18n={i18n} theme={theme} setPageName={setPageName} />
            </Suspense>
          }
        ></Route>
        <Route
          path="/about-me"
          element={
            <Suspense fallback={<div className={styles.loading}></div>}>
              <AboutMe t={t} i18n={i18n} setPageName={setPageName} />
            </Suspense>
          }
        ></Route>
        <Route
          path="/work"
          element={
            <Suspense fallback={<div className={styles.loading}></div>}>
              <Work t={t} i18n={i18n} setPageName={setPageName} />
            </Suspense>
          }
        ></Route>
        <Route
          path="/contact"
          element={
            <Suspense fallback={<div className={styles.loading}></div>}>
              <Contact t={t} i18n={i18n} setPageName={setPageName} />
            </Suspense>
          }
        ></Route>
        <Route
          path="/socials"
          element={
            <Suspense fallback={<div className={styles.loading}></div>}>
              <Socials t={t} i18n={i18n} setPageName={setPageName} />
            </Suspense>
          }
        ></Route>
        <Route
          path="/support"
          element={
            <Suspense fallback={<div className={styles.loading}></div>}>
              <Support t={t} i18n={i18n} setPageName={setPageName} />
            </Suspense>
          }
        ></Route>
      </Routes>
      <Footer t={t} i18n={i18n} />
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
document.getElementById("app").className = styles.app;

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
