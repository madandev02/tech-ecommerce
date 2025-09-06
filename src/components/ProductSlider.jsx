import React from "react";
import Slider from "react-slick";
import { StarIcon as SolidStarIcon } from "@heroicons/react/24/solid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow components
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
    onClick={onClick}
  >
    <div className="w-10 h-10 bg-blue-600 rounded-full flex justify-center items-center hover:bg-blue-700 transition">
      &gt;
    </div>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
    onClick={onClick}
  >
    <div className="w-10 h-10 bg-blue-600 rounded-full flex justify-center items-center hover:bg-blue-700 transition">
      &lt;
    </div>
  </div>
);

const ProductSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul className="m-0 p-0 flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-5 h-2 rounded-full bg-gray-300 hover:bg-blue-400 transition" />
    ),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const products = [
    { id: 1, name: "Gaming Laptop", price: "$1200", image: "https://via.placeholder.com/300x200", rating: 5, sold: 120 },
    { id: 2, name: "Wireless Headset", price: "$150", image: "https://via.placeholder.com/300x200", rating: 4, sold: 80 },
    { id: 3, name: "Mechanical Keyboard", price: "$99", image: "https://via.placeholder.com/300x200", rating: 4, sold: 50 },
    { id: 4, name: "4K Monitor", price: "$400", image: "https://via.placeholder.com/300x200", rating: 5, sold: 30 },
    { id: 5, name: "Gaming Mouse", price: "$60", image: "https://via.placeholder.com/300x200", rating: 4, sold: 95 },
  ];

  return (
    <div className="my-12 px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Hot Deals</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-3">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-4 flex flex-col items-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-blue-600 font-bold">{product.price}</p>
              
              {/* Stars */}
              <div className="flex mt-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <SolidStarIcon
                    key={i}
                    className={`w-5 h-5 ${i < product.rating ? "text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>

              {/* Sold info */}
              <p className="text-gray-500 text-sm mb-2">{product.sold} sold</p>

              <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
