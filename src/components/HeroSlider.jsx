import React from "react";
import Slider from "react-slick";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/outline";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// arrows 
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-5 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer"
    onClick={onClick}
  >
    <ArrowRightCircleIcon className="w-10 h-10 text-white hover:text-blue-400 transition" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-5 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer"
    onClick={onClick}
  >
    <ArrowLeftCircleIcon className="w-10 h-10 text-white hover:text-blue-400 transition" />
  </div>
);

const HeroSlider = () => {
  const slides = [
    { id: 1, image: "/images/slider1.jpg", title: "Upgrade Your Tech", subtitle: "Best deals on laptops & accessories" },
    { id: 2, image: "/images/slider2.jpg", title: "Top Gaming Gear", subtitle: "Consoles, keyboards, headsets" },
    { id: 3, image: "/images/slider3.jpg", title: "Smart Home Devices", subtitle: "Make your home smarter" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5500,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
      <div style={{ bottom: "10px" }}>
        <ul style={{ margin: 0, display: "flex", justifyContent: "center", gap: "8px" }}>
          {dots.map((dot, idx) => (
            <li key={idx}>{dot}</li>
          ))}
        </ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-3 h-3 rounded-full bg-blue-500 opacity-50 hover:opacity-100 transition" />
    ),
  };

  return (
    <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
      <Slider {...settings}>
        {slides.map(slide => (
          <div key={slide.id} className="relative w-full h-[50vh] md:h-[60vh]">
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-full object-cover"
            />
            {/* Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 bg-black/25">
              <h2 className="text-2xl md:text-4xl font-bold drop-shadow-lg mb-2">{slide.title}</h2>
              <p className="text-sm md:text-lg drop-shadow-md mb-4">{slide.subtitle}</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-lg transition">
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
