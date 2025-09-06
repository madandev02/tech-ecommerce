import React from "react";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import ProductSlider from "./components/ProductSlider";
import Categories from "./components/Categories";
import NewsLetter from "./components/NewsLetter";

// App Component
const App = () => {
  return (
    <div className="font-sans antialiased bg-gray-50 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Slider */}
      <HeroSlider />

      {/* Benefits Section */}
      <section className="container mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold mb-2">🚚 Free Shipping</h3>
          <p className="text-gray-500">On all orders over $100</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold mb-2">💳 Secure Payment</h3>
          <p className="text-gray-500">100% safe transactions</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold mb-2">📞 24/7 Support</h3>
          <p className="text-gray-500">We are here to help you</p>
        </div>
      </section>

      {/* Hot Deals / Best Sellers Slider */}
      <ProductSlider />

      {/* Categories Section */}
      <Categories />

      {/* Featured Brands */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">Trusted by Top Brands</h2>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-80">
          <img src="/src/assets/apple.png" alt="Apple" className="h-14" />
          <img src="/src/assets/samsung.png" alt="Samsung" className="h-14" />
          <img src="/src/assets/razer.png" alt="Razer" className="h-14" />
          <img src="/src/assets/sony.png" alt="Sony" className="h-14" />
          <img src="/src/assets/intel.png" alt="Intel" className="h-14" />
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsLetter />

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20 rounded-t-3xl">
        <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Store Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Store Hours</h3>
            <p className="text-gray-400">Mon - Fri: 9:00 - 20:00</p>
            <p className="text-gray-400">Sat: 10:00 - 18:00</p>
            <p className="text-gray-400">Sun: Closed</p>
          </div>

          {/* Store Address */}
          <div>
            <h3 className="text-xl font-bold mb-4">Visit Us</h3>
            <p className="text-gray-400">123 Tech Avenue, Santiago, Chile</p>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="text-xl font-bold mb-4">We Accept</h3>
            <div className="flex gap-4">
              <img src="/src/assets/visa.png" alt="Visa" className="h-8" />
              <img src="/src/assets/mastercard.png" alt="Mastercard" className="h-8" />
              <img src="/src/assets/paypal.png" alt="PayPal" className="h-8" />
            </div>
          </div>

          {/* Help Center */}
          <div>
            <h3 className="text-xl font-bold mb-4">Help Center</h3>
            <p className="text-gray-400">support@techstore.com</p>
            <p className="text-gray-400">+56 9 1234 5678</p>
            <a href="#" className="text-blue-400 hover:underline">
              FAQ & Support
            </a>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm py-6 border-t border-gray-800">
          &copy; 2025 TechStore. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
