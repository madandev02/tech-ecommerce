import React, { useState } from "react";
import Slider from "react-slick";
import { StarIcon as SolidStarIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sidebar from "./Sidebar";

// All Products Array (full array with objects)
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
  { id: 26, name: "Desktop PC", price: "$1300", image: "https://via.placeholder.com/300x200", rating: 5, status: "" },
  { id: 27, name: "Action Camera", price: "$450", image: "https://via.placeholder.com/300x200", rating: 4, status: "Hot" },
  { id: 28, name: "Portable SSD 1TB", price: "$180", image: "https://via.placeholder.com/300x200", rating: 5, status: "" },
  { id: 29, name: "Drone X", price: "$900", image: "https://via.placeholder.com/300x200", rating: 4, status: "New" },
  { id: 30, name: "Gaming Router", price: "$200", image: "https://via.placeholder.com/300x200", rating: 4, status: "" },
];


// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div onClick={onClick} className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-30">
    <div className="w-12 h-12 bg-blue-600 rounded-full flex justify-center items-center hover:bg-blue-700 transition shadow-lg">
      <ArrowRightIcon className="w-6 h-6 text-white" />
    </div>
  </div>
);
const PrevArrow = ({ onClick }) => (
  <div onClick={onClick} className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-30">
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
      <h2 className="text-4xl font-extrabold text-center text-blue-500 mb-8">
        Hot / Recommended Products
      </h2>
      <Slider {...settings}>
        {products.map((p) => (
          <div key={p.id} className="p-3">
            <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition p-5 flex flex-col items-center cursor-pointer group relative">
              {p.status && (
                <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-sm font-bold text-white shadow-lg ${p.status === "Hot" ? "bg-red-500" : "bg-green-500"}`}>
                  {p.status}
                </span>
              )}
              <div className="w-full h-48 overflow-hidden rounded-2xl mb-4 shadow-inner">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors text-center">{p.name}</h3>
              <p className="text-blue-600 font-bold text-lg my-2">{p.price}</p>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <SolidStarIcon key={i} className={`w-5 h-5 ${i < p.rating ? "text-yellow-400" : "text-gray-300"}`} />
                ))}
              </div>
              <button className="mt-2 px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-blue-700 transition shadow-lg">
                <ShoppingCartIcon className="w-5 h-5" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Products Page with Sidebar
const ProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const hotProducts = allProducts.filter((p) => p.status === "Hot" || p.status === "New");

  const handleFilterChange = ({ category, brands, priceRange, rating }) => {
    let filtered = allProducts;

    if (category) filtered = filtered.filter(p => p.name.toLowerCase().includes(category.toLowerCase()));
    if (brands.length) filtered = filtered.filter(p => brands.some(b => p.name.includes(b)));
    if (priceRange) {
      const [min, max] = priceRange;
      filtered = filtered.filter(p => {
        const priceNumber = Number(p.price.replace("$", ""));
        return priceNumber >= min && priceNumber <= max;
      });
    }
    if (rating) filtered = filtered.filter(p => p.rating >= rating);

    setFilteredProducts(filtered);
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-4">
      <HotProductsSlider products={hotProducts} />

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4 w-full">
          <Sidebar onFilterChange={handleFilterChange} />
        </div>

        <div className="lg:w-3/4 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProducts.length ? filteredProducts.map((p) => (
            <div key={p.id} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition p-5 flex flex-col items-center cursor-pointer group relative">
              {p.status && (
                <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-sm font-bold text-white shadow-lg ${p.status === "Hot" ? "bg-red-500" : "bg-green-500"}`}>
                  {p.status}
                </span>
              )}
              <div className="w-full h-48 overflow-hidden rounded-2xl mb-4 shadow-inner">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors text-center">{p.name}</h3>
              <p className="text-blue-600 font-bold text-lg my-2">{p.price}</p>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <SolidStarIcon key={i} className={`w-5 h-5 ${i < p.rating ? "text-yellow-400" : "text-gray-300"}`} />
                ))}
              </div>
              <button className="mt-2 px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-blue-700 transition shadow-lg">
                <ShoppingCartIcon className="w-5 h-5" />
                Add to Cart
              </button>
            </div>
          )) : (
            <p className="text-gray-500 col-span-full text-center mt-10">No products match your filters.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
