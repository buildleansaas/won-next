import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";

import Footer from "../../components/sections/Home/Footer/";

import t from "../../locale";

import "./index.css";

export default class Home extends Component {
  state = {
    locale: "en",
    loading: true,
  };

  componentDidMount() {
    if (typeof window !== "undefined") {
      const localStorageState = JSON.parse(
        window.localStorage.getItem("won-rva"),
      );

      if (typeof localStorageState === "object") {
        this.setState({ ...localStorageState, loading: false });
      }
    }
  }

  changeState = (key, value) => {
    this.setState({ [key]: value }, () =>
      window.localStorage.setItem("won-rva", JSON.stringify(this.state)),
    );
  };

  render() {
    const { locale } = this.state;
    const { header, footer, info } = t[locale];

    return (
      <div className="Events">
        <Head>
          <title>All Events | Won Buddhism of Richmond</title>
        </Head>

        <nav>
          <ul className="header-links right">
            <li>
              <Link href="/">{header.home}</Link>
            </li>
            <li>
              <button
                className="no-button"
                onClick={() => {
                  this.changeState("locale", locale === "en" ? "kr" : "en");
                }}>
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

        <div className="inner-wrapper narrow events-wrapper">
          <div className="Events-page-all-events-list">
            <h1>All Events</h1>
            <h2>
              Below you can find all upcoming events hosted by the Won Buddhism
              Temple of Richmond and any international events that might be of
              interest to our members!
            </h2>
          </div>
          <hr className="divider" />
          <div className="Home-info-upcoming">
            {info.upcoming.items.length === 0 ? (
              <p className="no-items">
                Currently there are no upcoming events, we hope to populate this
                list shortly!
              </p>
            ) : (
              <div className="Home-info-items">
                {info.upcoming.items
                  .slice(0, 3)
                  .map(
                    ({ start, end, title, description, registration }, i) => (
                      <div key={i} className="Home-info-item">
                        <h4 className="Home-info-item-title">
                          {title}
                          <br />
                          <small>
                            <strong>
                              {start} - {end}
                            </strong>
                          </small>
                        </h4>
                        <p>{description}</p>
                        <a
                          href={`mailto:${registration}?subject=${title} registration`}>
                          {info.button_more_info}
                        </a>{" "}
                        {info.call_option} (804)-243-5878.
                      </div>
                    ),
                  )}
              </div>
            )}
          </div>
        </div>

        <Footer footer={footer} />
      </div>
    );
  }
}
