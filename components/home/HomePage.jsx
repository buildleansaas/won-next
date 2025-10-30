"use client";
import { useEffect, useState } from "react";
import Introduction from "../sections/Home/Introduction";
import Activities from "../sections/Home/Activities";
import About from "../sections/Home/About";
import Footer from "../sections/Home/Footer";
import t from "../../locale";

export default function HomePage({ events, schedule, videos }) {
  const [locale, setLocale] = useState("en");

  const changeState = (key, value) => {
    if (key === "locale") {
      setLocale(value);
      if (typeof window !== "undefined") {
        const next = { locale: value };
        window.localStorage.setItem("won-rva", JSON.stringify(next));
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const localStorageState = JSON.parse(
          window.localStorage.getItem("won-rva")
        );
        if (
          localStorageState &&
          typeof localStorageState === "object" &&
          localStorageState.locale
        ) {
          setLocale(localStorageState.locale);
        }
      } catch {}
    }
  }, []);

  const { header, intro, about, footer } = t[locale];

  return (
    <div id="home" className="Home">
      <nav
        className="fixed top-0 left-0 right-0 bg-black/25 z-50 h-16"
        role="navigation"
      >
        <ul className="flex justify-center items-center h-full list-none px-6 space-x-6 uppercase text-white font-light text-base">
          <li>
            <a href="#home" className="hover:text-yellow-400 transition-colors">
              {header.home}
            </a>
          </li>
          <li>
            <a
              href="#activities"
              className="hover:text-yellow-400 transition-colors"
            >
              {header.activities}
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-yellow-400 transition-colors"
            >
              {header.about}
            </a>
          </li>
        </ul>
      </nav>

      <Introduction
        header={header}
        intro={intro}
        locale={locale}
        changeState={changeState}
      />
      <Activities schedule={schedule} events={events} videos={videos} />
      <About about={about} />
      <Footer footer={footer} />
    </div>
  );
}
