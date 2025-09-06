import React, { useState } from "react";
import Slider from "react-slick";
import { StarIcon as SolidStarIcon } from "@heroicons/react/24/solid";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Hot Products Array
const allProducts = [
  { id: 1, name: "Gaming Laptop", price: "$1200", image: "https://via.placeholder.com/300x200", rating: 5, status: "Hot" },
  { id: 2, name: "Wireless Headset", price: "$150", image: "https://via.placeholder.com/300x200", rating: 4, status: "New" },
  { id: 3, name: "Mechanical Keyboard", price: "$99", image: "https://via.placeholder.com/300x200", rating: 4, status: "" },
  { id: 4, name: "4K Monitor", price: "$400", image: "https://via.placeholder.com/300x200", rating: 5, status: "Hot" },
  { id: 5, name: "Gaming Mouse", price: "$60", image: "https://via.placeholder.com/300x200", rating: 4, status: "" },
  { id: 6, name: "Smartphone X", price: "$800", image: "https://via.placeholder.com/300x200", rating: 5, status: "New" },
  { id: 7, name: "Smartwatch Pro", price: "$250", image: "https://via.placeholder.com/300x200", rating: 4, status: "" },
  { id: 8, name: "Wireless Charger", price: "$40", image: "https://via.placeholder.com/300x200", rating: 3, status: "" },
  { id: 9, name: "Bluetooth Speaker", price: "$120", image: "https://via.placeholder.com/300x200", rating: 5, status: "Hot" },
  { id: 10, name: "VR Headset", price: "$500", image: "https://via.placeholder.com/300x200", rating: 4, status: "New" },
  { id: 11, name: "Laptop Pro 15\"", price: "$1500", image: "https://via.placeholder.com/300x200", rating: 5, status: "Hot" },
  { id: 12, name: "Smartphone Y", price: "$950", image: "https://via.placeholder.com/300x200", rating: 4, status: "" },
  { id: 13, name: "Gaming Chair", price: "$300", image: "https://via.placeholder.com/300x200", rating: 5, status: "New" },
  { id: 14, name: "Noise Cancelling Headphones", price: "$200", image: "https://via.placeholder.com/300x200", rating: 5, status: "" },
  { id: 15, name: "Mechanical Mouse", price: "$70", image: "https://via.placeholder.com/300x200", rating: 4, status: "Hot" },
  { id: 16, name: "Monitor 144Hz", price: "$450", image: "https://via.placeholder.com/300x200", rating: 5, status: "" },
  { id: 17, name: "Keyboard RGB", price: "$120", image: "https://via.placeholder.com/300x200", rating: 4, status: "New" },
  { id: 18, name: "Tablet Pro", price: "$600", image: "https://via.placeholder.com/300x200", rating: 5, status: "" },
  { id: 19, name: "Smart Glasses", price: "$350", image: "https://via.placeholder.com/300x200", rating: 4, status: "New" },
  { id: 20, name: "Gaming Desk", price: "$250", image: "https://via.placeholder.com/300x200", rating: 4, status: "" },
  { id: 21, name: "Camera Pro", price: "$800", image: "https://via.placeholder.com/300x200", rating: 5, status: "" },
  { id: 22, name: "Smartwatch Lite", price: "$150", image: "https://via.placeholder.com/300x200", rating: 3, status: "" },
  { id: 23, name: "Gaming Keyboard", price: "$100", image: "https://via.placeholder.com/300x200", rating: 5, status: "Hot" },
  { id: 24, name: "Laptop Air", price: "$1100", image: "https://via.placeholder.com/300x200", rating: 4, status: "" },
  { id: 25, name: "Bluetooth Earbuds", price: "$80", image: "https://via.placeholder.com/300x200", rating: 4, status: "New" },
];

// Custom arrows for Hot slider
const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-30"
  >
    <div className="w-12 h-12 bg-blue-600 rounded-full flex justify-center items-center hover:bg-blue-700 transition shadow-lg">
      <ArrowRightIcon className="w-6 h-6 text-white" />
    </div>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-30"
  >
    <div className="w-12 h-12 bg-blue-600 rounded-full flex justify-center items-center hover:bg-blue-700 transition shadow-lg">
      <ArrowLeftIcon className="w-6 h-6 text-white" />
    </div>
  </div>
);

// Hot Products Slider
const HotProductsSlider = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto mb-12 relative">
      <h2 className="text-4xl font-extrabold text-center text-red-500 mb-8">
        Hot / Recommended Products
      </h2>
      <Slider {...settings}>
        {products.map((p) => (
          <div key={p.id} className="p-3">
            <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition p-4 flex flex-col items-center cursor-pointer group relative">
              {p.status && (
                <span
                  className={`absolute top-3 left-3 px-3 py-1 rounded-full text-sm font-bold text-white ${
                    p.status === "Hot" ? "bg-red-500" : "bg-green-500"
                  } shadow-lg`}
                >
                  {p.status}
                </span>
              )}
              <div className="w-full h-44 overflow-hidden rounded-xl mb-4">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                {p.name}
              </h3>
              <p className="text-blue-600 font-bold text-lg my-2">{p.price}</p>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <SolidStarIcon
                    key={i}
                    className={`w-5 h-5 ${
                      i < p.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition shadow">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// All Products Grid with Pagination
const AllProductsGrid = ({ productsPerPage = 8 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  const currentProducts = allProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto mb-16 px-6">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        All Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentProducts.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition p-4 flex flex-col items-center cursor-pointer group relative"
          >
            {p.status && (
              <span
                className={`absolute top-3 left-3 px-3 py-1 rounded-full text-sm font-bold text-white ${
                  p.status === "Hot" ? "bg-red-500" : "bg-green-500"
                } shadow-lg`}
              >
                {p.status}
              </span>
            )}
            <div className="w-full h-44 overflow-hidden rounded-xl mb-4">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
              {p.name}
            </h3>
            <p className="text-blue-600 font-bold text-lg my-2">{p.price}</p>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <SolidStarIcon
                  key={i}
                  className={`w-5 h-5 ${
                    i < p.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition shadow">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-3">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              currentPage === i + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

// Main Products Page
const ProductsPage = () => {
  const hotProducts = allProducts.filter((p) => p.status === "Hot" || p.status === "New");

  return (
    <div className="py-12">
      <HotProductsSlider products={hotProducts} />
      <AllProductsGrid productsPerPage={8} />
    </div>
  );
};

export default ProductsPage;
