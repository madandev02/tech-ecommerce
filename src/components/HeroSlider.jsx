import React from "react";
import Slider from "react-slick";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: "slick-dots !bottom-6",
  };

  const slides = [
    {
      id: 1,
      title: "Upgrade Your Tech Today",
      subtitle: "Find the best deals on laptops, smartphones and accessories",
      image: "/images/slider1.jpg",
    },
    {
      id: 2,
      title: "Top Gaming Gear",
      subtitle: "Consoles, keyboards, headsets and more",
      image: "/images/slider2.jpg",
    },
    {
      id: 3,
      title: "Smart Home Devices",
      subtitle: "Make your home smarter with the latest technology",
      image: "/images/slider3.jpg",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden z-0">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative h-[60vh] md:h-[70vh] bg-center bg-cover"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50" />

            {/* Texto */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-base md:text-xl mb-6 drop-shadow-md">
                {slide.subtitle}
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition">
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
