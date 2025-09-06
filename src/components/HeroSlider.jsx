import React from "react";
import Slider from "react-slick";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow components
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
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: "slick-dots !bottom-8",
    appendDots: (dots) => (
      <div>
        <ul className="m-0 p-0 flex justify-center gap-3">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-10 h-2 bg-gray-400 rounded-full hover:bg-blue-500 transition" />
    ),
  };

  // Example slides
  const slides = [
    {
      id: 1,
      title: "Upgrade Your Tech Today",
      subtitle: "Find the best deals on laptops, smartphones and accessories",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1500&q=80",
    },
    {
      id: 2,
      title: "Top Gaming Gear",
      subtitle: "Consoles, keyboards, headsets and more",
      image:
        "https://images.unsplash.com/photo-1606813902951-1d5d4a0dbb5d?auto=format&fit=crop&w=1500&q=80",
    },
    {
      id: 3,
      title: "Smart Home Devices",
      subtitle: "Make your home smarter with the latest technology",
      image:
        "https://images.unsplash.com/photo-1595795449565-61a34b3812a9?auto=format&fit=crop&w=1500&q=80",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            {/* Background image */}
            <div
              className="h-[80vh] bg-cover bg-center flex flex-col justify-center items-center text-center text-white px-6"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50" />
              <div className="relative z-10 max-w-3xl">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-2xl mb-6 drop-shadow-md">
                  {slide.subtitle}
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
