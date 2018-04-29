import React from "react";

import "./index.css";

export default function Introduction({ header, intro, locale, changeState }) {
  return (
    <div className="Home-top">
      <nav>
        <ul className="header-links">
          <li>
            <a href="#home">{header.home}</a>
          </li>
          <li>
            <a href="#activities">{header.activities}</a>
          </li>
          <li>
            <a href="#about">{header.about}</a>
          </li>
          <li>
            <button
              className="no-button"
              onClick={() => {
                changeState("locale", locale === "en" ? "kr" : "en");
              }}
            >
              <img
                className="flag"
                src={locale === "en" ? "/static/usa.png" : "/static/sk.png"}
                alt={`Flag for the country of ${
                  locale === "en" ? "America" : "South Korea"
                }`}
              />
            </button>
          </li>
        </ul>
      </nav>
      <div className="Home-intro">
        <img src="/static/logo.png" className="Home-logo" alt="logo" />
        <h1 className="Home-title">{intro.title}</h1>
        <h2 className="Home-subtitle">{intro.subtitle}</h2>
      </div>
    </div>
  );
}
