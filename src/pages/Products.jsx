import React, { useState } from "react";
import Slider from "react-slick";
import {
  StarIcon as SolidStarIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Sidebar from "./Sidebar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// All Products Array
const allProducts = [
  {
    id: 1,
    name: "Gaming Laptop",
    price: "$1200",
    image:
      "https://www.asus.com/media/Odin/Websites/global/ProductLine/20200824120814.jpg",
    rating: 5,
    status: "Hot",
  },
  {
    id: 2,
    name: "Wireless Headset",
    price: "$150",
    image:
      "https://i5.walmartimages.com/seo/Microsoft-Xbox-Wireless-Headset-for-Xbox-Series-X-S-Xbox-One-and-Windows-10-Devices_64253c60-9ccc-411b-a86b-99d699b94a2d.4844244c7e9e50a3752dcec3c3b6edc8.jpeg",
    rating: 4,
    status: "New",
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    price: "$99",
    image:
      "https://m.media-amazon.com/images/I/71ZRus2YNcL._AC_UF894,1000_QL80_.jpg",
    rating: 4,
    status: "",
  },
  {
    id: 4,
    name: "4K Monitor",
    price: "$400",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2NVIGCFe3XP9bYRGCCEEluH3cYWNQoNfCaQ&s",
    rating: 5,
    status: "Hot",
  },
  {
    id: 5,
    name: "Gaming Mouse",
    price: "$60",
    image:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-9413J0PP550K-VJU00039-Logitech-G502-Wireless-Mouse-b00?qlt=90&wid=1253&hei=705&extendN=0.12,0.12,0.12,0.12&bgc=FFFFFFFF&fmt=jpg",
    rating: 4,
    status: "",
  },
  {
    id: 6,
    name: "Smartphone X",
    price: "$800",
    image:
      "https://storage.comprasmartphone.com/smartphones/apple-iphone-16.png",
    rating: 5,
    status: "New",
  },
  {
    id: 7,
    name: "Smartwatch Pro",
    price: "$250",
    image:
      "https://gsmpro.cl/cdn/shop/files/cmf-watch-pro-2_8a366d16.jpg?v=1747340376",
    rating: 4,
    status: "",
  },
  {
    id: 8,
    name: "Wireless Charger",
    price: "$40",
    image:
      "https://prophonechile.cl/wp-content/uploads/2021/05/cargadorvertical.png",
    rating: 3,
    status: "",
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    price: "$120",
    image:
      "https://www.jbl.cl/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw4b7e6f14/JBL_GO_4_3_4_LEFT_BLUE_48173_x1.png?sw=535&sh=535",
    rating: 5,
    status: "Hot",
  },
  {
    id: 10,
    name: "VR Headset",
    price: "$500",
    image: "https://m.media-amazon.com/images/I/71nK+JjLzzL._SL1500_.jpg",
    rating: 4,
    status: "New",
  },
  {
    id: 11,
    name: 'Laptop Pro 15"',
    price: "$1500",
    image:
      "https://cl-cenco-pim-resizer.ecomm.cencosud.com/unsafe/adaptive-fit-in/3840x0/filters:quality(75)/prd-cl/product-medias/2eaea660-665d-40d0-b5be-c047af478ed9/MK5SHVWY9H/MK5SHVWY9H-1/1711115443076-MK5SHVWY9H-1-6.png",
    rating: 5,
    status: "Hot",
  },
  {
    id: 12,
    name: "Smartphone Y",
    price: "$950",
    image:
      "https://www.vivosmartphone.cl/cdn/shop/files/Group_426.png?v=1744033591&width=400",
    rating: 4,
    status: "",
  },
  {
    id: 13,
    name: "Gaming Chair",
    price: "$300",
    image:
      "https://cdnx.jumpseller.com/fantech-esports/image/52381757/GC192-Grey-4.jpg?1754504313",
    rating: 5,
    status: "New",
  },
  {
    id: 14,
    name: "Noise Cancelling Headphones",
    price: "$200",
    image:
      "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/noise_cancelling_headphones_700/product_silo_images/Silo_jpg/noise_cancelling_headphones_700_blk_EC_hero.png/jcr:content/renditions/cq5dam.web.1920.1920.png",
    rating: 5,
    status: "",
  },
  {
    id: 15,
    name: "Mechanical Mouse",
    price: "$70",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_697231-CBT78035125334_082024-O.webp",
    rating: 4,
    status: "Hot",
  },
  {
    id: 16,
    name: "Monitor 144Hz",
    price: "$450",
    image:
      "https://cdnx.jumpseller.com/gigabyte/image/55058412/102420241014-4407-1ucjq1b.jpg?1728920169",
    rating: 5,
    status: "",
  },
  {
    id: 17,
    name: "Keyboard RGB",
    price: "$120",
    image: "https://m.media-amazon.com/images/I/71+p3Hx03dL._AC_SL1500_.jpg",
    rating: 4,
    status: "New",
  },
  {
    id: 18,
    name: "Tablet Pro",
    price: "$600",
    image:
      "https://f.fcdn.app/imgs/64c96e/universobinario.com/ubinuy/8d9d/original/catalogo/810115891543-001_1/1920-1200/tablet-my-tab-pro-64gb-4gb-10-1-wifi-001.jpg",
    rating: 5,
    status: "",
  },
  {
    id: 19,
    name: "Smart Glasses",
    price: "$350",
    image: "https://m.media-amazon.com/images/I/51%20vi5z5dWL.jpg",
    rating: 4,
    status: "New",
  },
  {
    id: 20,
    name: "Gaming Desk",
    price: "$250",
    image:
      "https://eurekaergonomic.com/cdn/shop/files/Eureka_Ergonomic_60_inch_Black_Gaming_Standing_Desk_with_RGB_Lighting.jpg",
    rating: 4,
    status: "",
  },
  {
    id: 21,
    name: "Camera Pro",
    price: "$800",
    image:
      "https://pro.sony/s3/2017/09/05105006/Studio-and-Broadcast-Cameras.jpg",
    rating: 5,
    status: "",
  },
  {
    id: 22,
    name: "Smartwatch Lite",
    price: "$150",
    image:
      "https://smartconcept.cl/wp-content/uploads/2020/12/Mi-Watch-Lite2.jpg",
    rating: 3,
    status: "",
  },
  {
    id: 23,
    name: "Gaming Keyboard",
    price: "$100",
    image:
      "https://rkgamingstore.com/cdn/shop/files/RKROYALKLUDGEM7575_GasketMountWirelessGamingKeyboard_2.png?v=1748569466&width=1946",
    rating: 5,
    status: "Hot",
  },
  {
    id: 24,
    name: "Laptop Air",
    price: "$1100",
    image:
      "https://www.apple.com/newsroom/images/2024/03/apple-unveils-the-new-13-and-15-inch-macbook-air-with-the-powerful-m3-chip/article/Apple-MacBook-Air-2-up-hero-240304_big.jpg.large.jpg",
    rating: 4,
    status: "",
  },
  {
    id: 25,
    name: "Bluetooth Earbuds",
    price: "$80",
    image:
      "https://media.falabella.com/falabellaCL/17437950_1/w=800,h=800,fit=pad",
    rating: 4,
    status: "New",
  },
  {
    id: 26,
    name: "Desktop PC",
    price: "$1300",
    image:
      "https://images-cdn.ubuy.co.in/65f1abea6f15032e663e11fe-dell-optiplex-7040-desktop-computer-pc.jpg",
    rating: 5,
    status: "",
  },
  {
    id: 27,
    name: "Action Camera",
    price: "$450",
    image:
      "https://prophonechile.cl/wp-content/uploads/2020/02/mi-action-camera-4k-3-4c8a59d9-3e15-4ad0-98e1-c7d16d8f03ce-fa6751dc-1d4e-4c45-a541-a1fbeab74c8b.jpg",
    rating: 4,
    status: "Hot",
  },
  {
    id: 28,
    name: "Portable SSD 1TB",
    price: "$180",
    image:
      "https://media.spdigital.cl/thumbnails/products/0dfrtgir_24422027_thumbnail_512.jpg",
    rating: 5,
    status: "",
  },
  {
    id: 29,
    name: "Drone X",
    price: "$900",
    image:
      "https://ansaldo.cl/cdn/shop/files/33741_02.jpg?v=1745867670&width=1445",
    rating: 4,
    status: "New",
  },
  {
    id: 30,
    name: "Gaming Router",
    price: "$200",
    image:
      "https://dlcdnwebimgs.asus.com/gain/2f77c780-f669-4351-b5de-f5521ba5b3b1/w800",
    rating: 4,
    status: "",
  },
];

// Custom Arrows 
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
      <h2 className="text-4xl font-extrabold text-center text-blue-500 mb-8">
        Hot / Recommended Products
      </h2>
      <Slider {...settings}>
        {products.map((p) => (
          <div key={p.id} className="p-3">
            <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition p-5 flex flex-col items-center cursor-pointer group relative">
              {p.status && (
                <span
                  className={`absolute top-3 left-3 px-3 py-1 rounded-full text-sm font-bold text-white shadow-lg ${
                    p.status === "Hot" ? "bg-red-500" : "bg-green-500"
                  }`}
                >
                  {p.status}
                </span>
              )}
              <div className="w-full h-48 overflow-hidden rounded-2xl mb-4 shadow-inner">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors text-center">
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

// Pagination Component
const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center items-center mt-6 gap-4">
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 disabled:opacity-50"
    >
      <ArrowLeftIcon className="w-5 h-5 text-blue-700" />
    </button>
    <span className="font-semibold">
      {currentPage} / {totalPages}
    </span>
    <button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 disabled:opacity-50"
    >
      <ArrowRightIcon className="w-5 h-5 text-blue-700" />
    </button>
  </div>
);

// Single Product Card
const ProductCard = ({ product }) => (
  <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition p-5 flex flex-col items-center cursor-pointer group relative">
    {product.status && (
      <span
        className={`absolute top-3 left-3 px-3 py-1 rounded-full text-sm font-bold text-white shadow-lg ${
          product.status === "Hot" ? "bg-red-500" : "bg-green-500"
        }`}
      >
        {product.status}
      </span>
    )}
    <div className="w-full h-56 overflow-hidden rounded-2xl mb-4 shadow-inner">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors text-center">
      {product.name}
    </h3>
    <p className="text-blue-600 font-bold text-lg my-2">{product.price}</p>
    <div className="flex items-center mb-2">
      {[...Array(5)].map((_, i) => (
        <SolidStarIcon
          key={i}
          className={`w-5 h-5 ${
            i < product.rating ? "text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
    <button className="mt-2 px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-blue-700 transition shadow-lg">
      <ShoppingCartIcon className="w-5 h-5" />
      Add to Cart
    </button>
  </div>
);

// Products Page
const ProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const hotProducts = allProducts.filter(
    (p) => p.status === "Hot" || p.status === "New"
  );

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleFilterChange = ({ category, brands, priceRange, rating }) => {
    let filtered = allProducts;

    if (category)
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(category.toLowerCase())
      );
    if (brands && brands.length)
      filtered = filtered.filter((p) => brands.some((b) => p.name.includes(b)));
    if (priceRange) {
      const [min, max] = priceRange;
      filtered = filtered.filter((p) => {
        const priceNumber = Number(p.price.replace("$", ""));
        return priceNumber >= min && priceNumber <= max;
      });
    }
    if (rating) filtered = filtered.filter((p) => p.rating >= rating);

    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-4">
      {/* Hot Products Slider */}
      <HotProductsSlider products={hotProducts} />

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4 w-full">
          <Sidebar onFilterChange={handleFilterChange} />
        </div>

        <div className="lg:w-3/4 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {currentProducts.length ? (
            currentProducts.map((p) => <ProductCard key={p.id} product={p} />)
          ) : (
            <p className="text-gray-500 col-span-full text-center mt-10">
              No products match your filters.
            </p>
          )}
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default ProductsPage;
