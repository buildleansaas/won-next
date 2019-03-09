import React from "react";

import Slider from "react-slick";
import "./slider.css";

const images = [
  {
    alt: "the temple reverendes Kim and Diane",
    number: 0,
  },
  {
    alt: "the temple reverendes Kim and Diane",
    number: 1,
  },
  {
    alt: "a view of the driveway",
    number: 3,
  },
  {
    alt: "a look inside the temple",
    number: 5,
  },
  {
    alt: "welcome to the temple!",
    number: 6,
  },
  {
    alt: "a look of the driveway approaching the temple",
    number: 7,
  },
  {
    alt: "Kim, Diane and Chuck taking a rest after envigorating Tai Chi!",
    number: 8,
  },
  {
    alt: "Helping hands taking care of our beautiful grounds!",
    number: 9,
  },
  {
    alt: "Kim Kyomunim!",
    number: 10,
  },
  {
    alt: "Our temple is beautiful in the Fall, and all year around!",
    number: 11,
  },
  {
    alt: "Boys and girls youth from Korea come stay, learn about America!",
    number: 12,
  },
];

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    adaptiveHeight: true,
  };

  return (
    <Slider {...settings}>
      {shuffle(images).map((image, i) => (
        <img
          key={i}
          alt={image.alt}
          src={`/static/slides/${image.number}.jpg`}
          className="slide-image"
        />
      ))}
    </Slider>
  );
}
