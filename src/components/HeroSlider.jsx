import React from "react";
import Slider from "react-slick";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/outline";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";

// Custom arrows
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-6 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
    onClick={onClick}
  >
    <ArrowRightCircleIcon className="w-12 h-12 text-white hover:text-blue-400 transition" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-6 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
    onClick={onClick}
  >
    <ArrowLeftCircleIcon className="w-12 h-12 text-white hover:text-blue-400 transition" />
  </div>
);

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: "slick-dots !bottom-6",
    appendDots: (dots) => (
      <div>
        <ul className="m-0 p-0 flex justify-center gap-3">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-8 h-2 bg-gray-400 rounded-full hover:bg-blue-500 transition"></div>
    ),
    pauseOnHover: true,
    adaptiveHeight: true,
  };

  const slides = [
    { id: 1, title: "Upgrade Your Tech Today", subtitle: "Find the best deals on laptops, smartphones and accessories", image: slider1 },
    { id: 2, title: "Top Gaming Gear", subtitle: "Consoles, keyboards, headsets and more", image: slider2 },
    { id: 3, title: "Smart Home Devices", subtitle: "Make your home smarter with the latest technology", image: slider3 },
  ];

  return (
    <div className="relative w-full overflow-hidden z-0">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-[60vh] md:h-[70vh]">
            {/* Imagen de fondo */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
            {/* Texto */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-base md:text-xl mb-6 drop-shadow-md">
                {slide.subtitle}
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition z-10">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
