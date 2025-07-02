import React, { useEffect, useState } from "react";

import Slider from "react-slick";

import sanity from "../../../../lib/sanity";
import { getSlides } from "../../../../api/slides";

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Carousel() {
  const [slides, setSlides] = useState([]);

  async function fetchSlides() {
    const slides = await sanity.fetch(getSlides);
    setSlides(slides);
  }

  useEffect(() => {
    fetchSlides();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    adaptiveHeight: true
  };

  return (
    <Slider {...settings}>
      {slides.length &&
        shuffle(slides).map((image, i) => (
          <img
            key={i}
            alt={image.caption}
            src={image.imageUrl}
            className="slide-image"
          />
        ))}
    </Slider>
  );
}
