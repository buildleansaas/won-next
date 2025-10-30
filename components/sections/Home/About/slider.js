import React from "react";
import Slider from "react-slick";

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Carousel() {
  const slides = [
    "/static/slides/0.jpg",
    "/static/slides/1.jpg",
    "/static/slides/3.jpg",
    "/static/slides/5.jpg",
    "/static/slides/6.jpg",
    "/static/slides/7.jpg",
    "/static/slides/9.jpg",
    "/static/slides/10.jpg",
    "/static/slides/11.jpg",
  ];

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
      {shuffle(slides).map((src, i) => (
        <img
          key={i}
          alt="temple slide"
          src={src}
          className="slide-image"
        />
      ))}
    </Slider>
  );
}
