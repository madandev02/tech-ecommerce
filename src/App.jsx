import React from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";

// Products array
const products = [
  {
    id: 1,
    name: "Gaming Laptop",
    description: "High performance laptop for gaming and work.",
    price: 1499.99,
    image: "/src/assets/laptop.jpg",
    isNew: true,
    rating: 5,
  },
  {
    id: 2,
    name: "Smartphone Pro",
    description: "Latest smartphone with amazing camera.",
    price: 999.99,
    image: "/src/assets/smartphone.jpg",
    isSale: true,
    rating: 4,
  },
  {
    id: 3,
    name: "Wireless Headphones",
    description: "Noise cancelling, long battery life.",
    price: 199.99,
    image: "/src/assets/headphones.jpg",
    rating: 4,
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    description: "RGB lighting, perfect for gaming.",
    price: 129.99,
    image: "/src/assets/keyboard.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Smart Watch",
    description: "Track your fitness and notifications.",
    price: 249.99,
    image: "/src/assets/smartwatch.jpg",
    isNew: true,
    rating: 5,
  },
  {
    id: 6,
    name: "Gaming Mouse",
    description: "Ergonomic design with customizable DPI.",
    price: 79.99,
    image: "/src/assets/mouse.jpg",
    rating: 4,
  },
];

const App = () => {
  return (
    <div className="font-sans antialiased bg-gray-50 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-32 px-4 text-center rounded-b-3xl overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="/src/assets/hero-bg.jpg"
            alt="Tech background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Upgrade Your Tech Today
          </h1>
          <p className="text-lg md:text-2xl mb-8 drop-shadow-md">
            Discover the latest gadgets for work, gaming, and lifestyle.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg">
              Shop Now
            </button>
            <button className="bg-transparent border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <Categories />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Products Grid */}
      <section className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">TechStore</h3>
            <p className="text-gray-400">
              Your one-stop shop for the latest tech gadgets and accessories.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li className="hover:text-blue-400 transition cursor-pointer">
                Home
              </li>
              <li className="hover:text-blue-400 transition cursor-pointer">
                Products
              </li>
              <li className="hover:text-blue-400 transition cursor-pointer">
                About
              </li>
              <li className="hover:text-blue-400 transition cursor-pointer">
                Contact
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">support@techstore.com</p>
            <p className="text-gray-400">+1 (123) 456-7890</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-blue-400 transition">
                Facebook
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                Twitter
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm py-4 border-t border-gray-700">
          &copy; 2025 TechStore. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
