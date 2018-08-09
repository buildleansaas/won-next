import React, { Component } from "react";
import Link from "next/link";

import "./index.css";

import t from "../../locale";

import OngoingProgramsEditor from "./components/OngoingProgramsEditor";

const tabs = [
  {
    text: "Ongoing Programs",
    id: "ongoing-programs"
  },
  {
    text: "Upcoming Events",
    id: "upcoming-events"
  }
];

export default class Home extends Component {
  state = {
    locale: "en",
    activeTabId: "ongoing-programs"
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

  renderEditor(activeTabId) {
    switch (activeTabId) {
      case "ongoing-programs":
        return <OngoingProgramsEditor />;

      case "upcoming-events":
        return (
          <div className="panel">
            <p>This is the panel to edit the Upcoming Events.</p>
          </div>
        );
    }

    return (
      <div className="panel">
        <p>This text should not be shown, please call Austin if so.</p>
      </div>
    );
  }

  render() {
    const { locale, activeTabId } = this.state;
    const { header, footer, info } = t[locale];

    return (
      <div className="admin">
        <nav>
          <ul className="header-links right thin">
            <li>
              <Link href="/">{header.home}</Link>
            </li>
          </ul>
        </nav>

        <div className="tabs">
          {tabs.map(({ text, id }) => (
            <button
              onClick={() => this.changeState("activeTabId", id)}
              className={id === activeTabId ? "active" : "inactive"}
            >
              {text}
            </button>
          ))}
        </div>

        {this.renderEditor(activeTabId)}
      </div>
    );
  }
}
