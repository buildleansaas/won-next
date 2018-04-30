import React, { Component } from "react";

import Introduction from "../components/sections/Home/Introduction/";
import Activities from "../components/sections/Home/Activities/";
import About from "../components/sections/Home/About/";
import Footer from "../components/sections/Home/Footer/";

import "./index.css";

import t from "../locale";

export default class Home extends Component {
  state = {
    locale: "en"
  };

  componentWillMount() {
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
    const { header, intro, info, about } = t[locale];

    return (
      <div id="home" className="Home">
        <Introduction
          header={header}
          intro={intro}
          locale={locale}
          changeState={this.changeState}
        />
        <Activities info={info} />
        <About about={about} />
        <Footer />
      </div>
    );
  }
}
