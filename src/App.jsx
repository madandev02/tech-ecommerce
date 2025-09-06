import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import ProductSlider from "./components/ProductSlider";
import Categories from "./components/Categories";
import NewsLetter from "./components/NewsLetter";
import Cart from "./pages/Cart";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import CategoriesPage from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <div className="font-sans antialiased bg-gray-50 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSlider />

              {/* Benefits Section */}
              <section className="container mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-center mb-12">
                  Why Shop With Us?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  <div className="p-8 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col items-center">
                    <span className="text-5xl mb-4">🚚</span>
                    <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
                    <p className="text-center text-white/80">
                      On all orders over $100
                    </p>
                  </div>

                  <div className="p-8 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col items-center">
                    <span className="text-5xl mb-4">💳</span>
                    <h3 className="text-xl font-bold mb-2">Secure Payment</h3>
                    <p className="text-center text-white/80">
                      100% safe transactions
                    </p>
                  </div>

                  <div className="p-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col items-center">
                    <span className="text-5xl mb-4">📞</span>
                    <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                    <p className="text-center text-white/80">
                      We are here to help you anytime
                    </p>
                  </div>
                </div>
              </section>

              {/* Hot Deals / Best Sellers Slider */}
              <ProductSlider />

              {/* Categories Section */}
              <Categories />

              {/* Featured Brands */}
              <section className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl font-bold mb-10">
                  Trusted by Top Brands
                </h2>
                <div className="flex flex-wrap justify-center items-center gap-12 opacity-80">
                  <img
                    src="/images/brands/apple.png"
                    alt="Apple"
                    className="h-14"
                  />
                  <img
                    src="/images/brands/samsung.png"
                    alt="Samsung"
                    className="h-14"
                  />
                  <img
                    src="/images/brands/razer.png"
                    alt="Razer"
                    className="h-14"
                  />
                  <img
                    src="/images/brands/sony.png"
                    alt="Sony"
                    className="h-14"
                  />
                  <img
                    src="/images/brands/intel.png"
                    alt="Intel"
                    className="h-14"
                  />
                </div>
              </section>

              {/* Newsletter Section */}
              <NewsLetter />
            </>
          }
        />

        {/* Other Pages */}
        <Route path="/products" element={<Products />} />
        <Route path="/categories/:categoryName" element={<CategoriesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20 pt-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Store Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-gray-700 pb-2">
              Store Hours
            </h3>
            <p className="text-gray-400 mb-1">Mon - Fri: 9:00 - 20:00</p>
            <p className="text-gray-400 mb-1">Sat: 10:00 - 18:00</p>
            <p className="text-gray-400">Sun: Closed</p>
          </div>

          {/* Visit Us */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-gray-700 pb-2">
              Visit Us
            </h3>
            <p className="text-gray-400">123 Tech Avenue</p>
            <p className="text-gray-400">Santiago, Chile</p>
            <p className="text-gray-400 mt-2">Find us on Google Maps</p>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-gray-700 pb-2">
              We Accept
            </h3>
            <div className="flex gap-4 items-center">
              <img
                src="/images/payments/visa.png"
                alt="Visa"
                className="h-10 object-contain"
              />
              <img
                src="/images/payments/mastercard.png"
                alt="Mastercard"
                className="h-10 object-contain"
              />
              <img
                src="/images/payments/paypal.png"
                alt="PayPal"
                className="h-10 object-contain"
              />
            </div>
          </div>

          {/* Help Center */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-gray-700 pb-2">
              Help Center
            </h3>
            <p className="text-gray-400 mb-1">support@techstore.com</p>
            <p className="text-gray-400 mb-2">+56 9 1234 5678</p>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-500 transition"
            >
              FAQ & Support
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 border-t border-gray-800 text-gray-500 text-center py-6 text-sm">
          &copy; 2025 TechStore. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
