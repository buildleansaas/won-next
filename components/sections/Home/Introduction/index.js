import React from "react";
import AnnouncementBanner from "../../../AnnouncementBanner";

export default function Introduction({ header, intro, locale, changeState }) {
  return (
    <>
      <div className="bg-[url('/static/background.jpg')] bg-center bg-cover bg-fixed">
        <div className="relative bg-black/40 flex items-center justify-center flex-col h-[75vh] sm:h-[95vh] px-5 pb-5 pt-16 text-white text-lg">
          <div className="absolute left-0 right-0 top-16">
            <AnnouncementBanner />
          </div>
          <div className="h-12" />
          <img src="/static/logo.png" className="h-60" alt="logo" />
          <h1 className="text-2xl">{intro.title}</h1>
          <h2 className="text-xl">{intro.subtitle}</h2>
        </div>
      </div>
    </>
  );
}
