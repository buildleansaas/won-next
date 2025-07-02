import React from "react";

export default function Introduction({ header, intro, locale, changeState }) {
  return (
    <div className="Home-top">
      <div className="Home-intro">
        <img src="/static/logo.png" className="Home-logo" alt="logo" />
        <h1 className="Home-title">{intro.title}</h1>
        <h2 className="Home-subtitle">{intro.subtitle}</h2>
      </div>
    </div>
  );
}
