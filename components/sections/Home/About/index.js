import React from "react";

// carousel
import Slider from "./slider";

export default function About({ about }) {
  return (
      <div id="about" className="Home-about scroll-mt-16">
        <div className="bg-yellow-400 p-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 max-w-5xl mx-auto">
            <div className="Home-about-info-text">
              <h3>{about.title}</h3>
              {about.about_paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p className="button-link-container-flex">
                <a
                  target="_blank"
                  rel="noopener"
                  href="mailto:richmond-va@wonbuddhism.org?subject=Interest%20in%20Won-Buddhism%20Richmond%20Temple"
                  className="button-link gold-bg-button">
                  Email Us Today
                </a>
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://www.google.com/maps/place/Won+Buddhism+of+Richmond+Inc/@37.629929,-77.2996487,17z/data=!3m1!4b1!4m5!3m4!1s0x89b1234210dc55c9:0x1aa8a4363049ebf5!8m2!3d37.629929!4d-77.29746"
                  className="button-link gold-bg-button">
                  Visit Our Location
                </a>
              </p>
            </div>

            <div className="slides-container">
              <Slider />
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 max-w-5xl mx-auto">
            <div>
              <h3>{about.subtitle}</h3>
              {about.about_won_paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <div className="button-link-container-flex">
                <a
                  href="http://wonbuddhism.org/#/what-is-won-buddhism"
                  target="_blank"
                  rel="noopener"
                  className="button-link">
                  More About Won-Buddhism
                </a>
                <a
                  href="http://wonbuddhism.org/#/il-won-sang"
                  target="_blank"
                  rel="noopener"
                  className="button-link">
                  Our Teachings
                </a>
                <a
                  href="http://wonbuddhism.org/#/timeless-zen"
                  target="_blank"
                  rel="noopener"
                  className="button-link">
                  How to Practice
                </a>
                <a
                  href="http://wonbuddhism.org/#/resource"
                  target="_blank"
                  rel="noopener"
                  className="button-link">
                  Main Writings
                </a>
              </div>
            </div>
            <img
              className="il-won-image"
              src={"/static/life-il-won.jpg"}
              alt="abundance of life flowering from the il-won-sang"
            />
          </div>
        </div>
      </div>
  );
}
