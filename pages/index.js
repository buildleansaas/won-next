import React, { Component } from "react";
import ScrollableAnchor, { configureAnchors } from "react-scrollable-anchor";
import Head from "next/head";
import sanity from "../lib/sanity";

import { getSchedule } from "../api/schedule";
import { getVideos } from "../api/video";
import { getEvents } from "../api/events";

import Introduction from "../components/sections/Home/Introduction/";
import Activities from "../components/sections/Home/Activities/";
import About from "../components/sections/Home/About/";
import Footer from "../components/sections/Home/Footer/";

import t from "../locale";

class Home extends Component {
  state = {
    locale: "en"
  };

  changeState = (key, value) => {
    this.setState({ [key]: value }, () =>
      window.localStorage.setItem("won-rva", JSON.stringify(this.state))
    );
  };

  async componentDidMount() {
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

  render() {
    const { events, schedule, videos } = this.props;
    const { locale } = this.state;
    const { header, intro, about, footer } = t[locale];

    return (
      <ScrollableAnchor id={"home"}>
        <div className="Home">
          <Head>
            <title>Home | Won Buddhism of Richmond</title>
          </Head>
          <nav className="fixed top-0 left-0 right-0 bg-black/25 z-50">
            <ul className="flex justify-end list-none p-8 space-x-4 uppercase text-white font-light md:text-base sm:text-sm sm:justify-center sm:p-4">
              <li>
                <a href="#home" className="hover:text-yellow-400 transition-colors">{header.home}</a>
              </li>
              <li>
                <a href="#activities" className="hover:text-yellow-400 transition-colors">{header.activities}</a>
              </li>
              <li>
                <a href="#about" className="hover:text-yellow-400 transition-colors">{header.about}</a>
              </li>
              {/* <li>
                <button
                  className="no-button"
                  onClick={() => {
                    this.changeState("locale", locale === "en" ? "kr" : "en");
                  }}>
                  <img
                    className="w-8 relative top-2"
                    src={locale === "en" ? "/static/usa.png" : "/static/sk.png"}
                    alt={`Flag for the country of ${
                      locale === "en" ? "America" : "South Korea"
                      }`}
                  />
                </button>
              </li> */}
            </ul>
          </nav>

          <Introduction
            header={header}
            intro={intro}
            locale={locale}
            changeState={this.changeState}
          />
          <Activities schedule={schedule} events={events} videos={videos} />
          <About about={about} />
          <Footer footer={footer} />
        </div>
      </ScrollableAnchor>
    );
  }
}

Home.getInitialProps = async function() {
  return {
    events: await sanity.fetch(getEvents),
    schedule: await sanity.fetch(getSchedule),
    videos: await sanity.fetch(getVideos)
  };
};

export default Home;
