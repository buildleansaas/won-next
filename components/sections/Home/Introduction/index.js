import React from "react";

export default function Introduction({ header, intro, locale, changeState }) {
  return (
    <div className="bg-[url('/static/background.jpg')] bg-center bg-cover bg-fixed">
      <div className="bg-black/40 flex items-center justify-center flex-col h-[75vh] sm:h-[95vh] pt-[100px] p-5 text-white text-lg">
        <img src="/static/logo.png" className="h-60" alt="logo" />
        <h1 className="text-2xl">{intro.title}</h1>
        <h2 className="text-xl">{intro.subtitle}</h2>
      </div>
    </div>
  );
}
