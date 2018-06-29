import React, { Component } from "react";
import ScrollableAnchor, { configureAnchors } from "react-scrollable-anchor";
import Head from "next/head";

import Introduction from "../components/sections/Home/Introduction/";
import Activities from "../components/sections/Home/Activities/";
import About from "../components/sections/Home/About/";
import Footer from "../components/sections/Home/Footer/";

import "./index.css";
import "./header.css";

import t from "../locale";

export default class Home extends Component {
  state = {
    locale: "en"
  };

  componentDidMount() {
    configureAnchors({ offset: -116, scrollDuration: 400 });

    if (typeof window !== "undefined") {
      const localStorageState = JSON.parse(
        window.localStorage.getItem("won-rva")
      );

      if (typeof localStorageState === "object") {
        this.setState({ ...localStorageState });
      }
    }
  }

  changeState = (key, value) => {
    this.setState({ [key]: value }, () =>
      window.localStorage.setItem("won-rva", JSON.stringify(this.state))
    );
  };

  render() {
    const { locale } = this.state;
    const { header, intro, info, about, footer } = t[locale];

    return (
      <ScrollableAnchor id={"home"}>
        <div className="Home">
          <Head>
            <title>Home | Won Buddhism of Richmond</title>
          </Head>
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
                    this.changeState("locale", locale === "en" ? "kr" : "en");
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

          <Introduction
            header={header}
            intro={intro}
            locale={locale}
            changeState={this.changeState}
          />
          <Activities info={info} />
          <About about={about} />
          <Footer footer={footer} />
        </div>
      </ScrollableAnchor>
    );
  }
}
