import React from "react";
import Slider from "react-slick";
import { StarIcon as SolidStarIcon } from "@heroicons/react/24/solid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
    onClick={onClick}
  >
    <div className="w-10 h-10 bg-blue-600 rounded-full flex justify-center items-center hover:bg-blue-700 transition text-white text-2xl font-bold">
      &gt;
    </div>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
    onClick={onClick}
  >
    <div className="w-10 h-10 bg-blue-600 rounded-full flex justify-center items-center hover:bg-blue-700 transition text-white text-2xl font-bold">
      &lt;
    </div>
  </div>
);

const ProductSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul className="m-0 p-0 flex justify-center gap-3">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-6 h-1 bg-gray-300 rounded-full hover:bg-blue-600 transition"></div>
    ),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const products = [
    { id: 1, name: "Gaming Laptop", price: "$1200", image: "https://www.asus.com/media/Odin/Websites/global/ProductLine/20200824120814.jpg", rating: 5, sold: 120 },
    { id: 2, name: "Wireless Headset", price: "$150", image: "https://i5.walmartimages.com/seo/Microsoft-Xbox-Wireless-Headset-for-Xbox-Series-X-S-Xbox-One-and-Windows-10-Devices_64253c60-9ccc-411b-a86b-99d699b94a2d.4844244c7e9e50a3752dcec3c3b6edc8.jpeg", rating: 4, sold: 80 },
    { id: 3, name: "Mechanical Keyboard", price: "$99", image: "https://m.media-amazon.com/images/I/71ZRus2YNcL._AC_UF894,1000_QL80_.jpg", rating: 4, sold: 50 },
    { id: 4, name: "4K Monitor", price: "$400", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2NVIGCFe3XP9bYRGCCEEluH3cYWNQoNfCaQ&s", rating: 5, sold: 30 },
    { id: 5, name: "Gaming Mouse", price: "$60", image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-9413J0PP550K-VJU00039-Logitech-G502-Wireless-Mouse-b00?qlt=90&wid=1253&hei=705&extendN=0.12,0.12,0.12,0.12&bgc=FFFFFFFF&fmt=jpg", rating: 4, sold: 95 },
  ];

  return (
    <div className="my-12 px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Hot Deals
      </h2>

      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-3">
            <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-1 group cursor-pointer flex flex-col items-center p-4">
              
              {/* Product Image */}
              <div className="w-full h-56 sm:h-60 md:h-64 lg:h-56 overflow-hidden rounded-xl mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Product Info */}
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 text-center transition-colors">{product.name}</h3>
              <p className="text-blue-600 font-semibold text-lg my-1">{product.price}</p>

              {/* Stars */}
              <div className="flex items-center mt-1 mb-2 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <SolidStarIcon
                    key={i}
                    className={`w-5 h-5 ${i < product.rating ? "text-yellow-400" : "text-gray-300"} transition-colors`}
                  />
                ))}
              </div>

              {/* Sold info */}
              <p className="text-gray-500 text-sm mb-3">{product.sold} sold</p>

              {/* Add to Cart Button */}
              <button className="px-5 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition font-medium">
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
