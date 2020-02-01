import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

// carousel
import Slider from "./slider";

import "./index.css";

export default function About({ about }) {
  return (
    <ScrollableAnchor id={"about"}>
      <div className="Home-about">
        <div className="gold-background">
          <div className="Home-about-info inner-wrapper flex-info">
            <div className="Home-about-info-text">
              <h3>{about.title}</h3>
              {about.about_paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p className="button-link-container-flex">
                <a
                  about="_blank"
                  href="mailto:richmond-va@wonbuddhism.org?Interest in Won-Buddhism Richmond Temple"
                  className="button-link">
                  Email Us Today
                </a>
                <a
                  about="_blank"
                  href="https://www.google.com/maps/place/Won+Buddhism+of+Richmond+Inc/@37.629929,-77.2996487,17z/data=!3m1!4b1!4m5!3m4!1s0x89b1234210dc55c9:0x1aa8a4363049ebf5!8m2!3d37.629929!4d-77.29746"
                  className="button-link">
                  Visit Our Location
                </a>
              </p>
            </div>

            <div className="slides-container">
              <Slider />
            </div>
          </div>
        </div>

        <div className="light-grey-background">
          <div className="inner-wrapper flex-info">
            <div>
              <h3>{about.subtitle}</h3>
              {about.about_won_paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <div className="button-link-container-flex">
                <a
                  about="_blank"
                  href="http://wonbuddhism.org/#/what-is-won-buddhism"
                  target="_blank"
                  rel="noopener"
                  className="button-link">
                  More About Won-Buddhism
                </a>
                <a
                  about="_blank"
                  href="http://wonbuddhism.org/#/il-won-sang"
                  target="_blank"
                  rel="noopener"
                  className="button-link">
                  Our Teachings
                </a>
                <a
                  about="_blank"
                  href="http://wonbuddhism.org/#/timeless-zen"
                  target="_blank"
                  rel="noopener"
                  className="button-link">
                  How to Practice
                </a>
                <a
                  about="_blank"
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
    </ScrollableAnchor>
  );
}
