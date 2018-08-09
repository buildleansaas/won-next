import React, { Component } from "react";
import Link from "next/link";

import t from "../../locale";

export default class Home extends Component {
  state = {
    locale: "en",
    loading: true
  };

  componentDidMount() {
    if (typeof window !== "undefined") {
      const localStorageState = JSON.parse(
        window.localStorage.getItem("won-rva")
      );

      if (typeof localStorageState === "object") {
        this.setState({ ...localStorageState, loading: false });
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
    const { header, footer, info } = t[locale];

    return (
      <div className="">
        <nav>
          <ul className="header-links right thin">
            <li>
              <Link href="/">{header.home}</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
