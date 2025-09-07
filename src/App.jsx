import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import ProductSlider from "./components/ProductSlider";
import Categories from "./components/Categories";
import NewsLetter from "./components/NewsLetter";
import Cart from "./pages/Cart";
import Sidebar from "./pages/Sidebar";
import "swiper/css";
import "swiper/css/autoplay";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import CategoriesPage from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  return (
    <div className="font-sans antialiased bg-gray-50 min-h-screen">
      {/* Navbar */}
      <Navbar setNavbarHeight={setNavbarHeight} />

      {/* Main content with padding-top equal to navbar height */}
      <div style={{ paddingTop: navbarHeight }}>
        {/* Routes */}
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <HeroSlider />

                {/* Benefits Section */}
                <section className="container mx-auto px-6 py-20">
                  <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
                    Why Shop With Us?
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Benefit 1 */}
                    <div className="p-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-3xl shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center">
                      <span className="text-6xl mb-4">🚚</span>
                      <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
                      <p className="text-white/80">
                        On all orders over $100 nationwide.
                      </p>
                    </div>

                    {/* Benefit 2 */}
                    <div className="p-6 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-3xl shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center">
                      <span className="text-6xl mb-4">💳</span>
                      <h3 className="text-xl font-bold mb-2">Secure Payment</h3>
                      <p className="text-white/80">
                        100% safe and encrypted transactions.
                      </p>
                    </div>

                    {/* Benefit 3 */}
                    <div className="p-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-3xl shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center">
                      <span className="text-6xl mb-4">📞</span>
                      <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                      <p className="text-white/80">
                        Our experts are ready to help anytime.
                      </p>
                    </div>

                    {/* Benefit 4 */}
                    <div className="p-6 bg-gradient-to-r from-indigo-400 to-blue-500 text-white rounded-3xl shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center">
                      <span className="text-6xl mb-4">💡</span>
                      <h3 className="text-xl font-bold mb-2">Latest Tech</h3>
                      <p className="text-white/80">
                        We offer the newest gadgets and devices.
                      </p>
                    </div>

                    {/* Benefit 5 */}
                    <div className="p-6 bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded-3xl shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center">
                      <span className="text-6xl mb-4">🏆</span>
                      <h3 className="text-xl font-bold mb-2">Best Quality</h3>
                      <p className="text-white/80">
                        Premium products from trusted brands.
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    Trusted by Top Brands
                  </h2>

                  <div className="flex overflow-x-auto no-scrollbar gap-8 justify-center items-center py-4">
                    {[
                      { name: "Apple", src: "/images/brands/apple.png" },
                      { name: "Samsung", src: "/images/brands/samsung.png" },
                      { name: "Razer", src: "/images/brands/razer.png" },
                      { name: "Sony", src: "/images/brands/sony.png" },
                      { name: "Intel", src: "/images/brands/intel.png" },
                      { name: "Microsoft", src: "/images/brands/microsoft.png" },
                      { name: "Logitech", src: "/images/brands/logitech.png" },
                    ].map((brand, i) => (
                      <div
                        key={i}
                        className="flex-shrink-0 w-28 md:w-32 lg:w-36 p-4 bg-white rounded-xl shadow hover:shadow-2xl transition-transform transform hover:scale-110 cursor-pointer"
                      >
                        <img
                          src={brand.src}
                          alt={brand.name}
                          className="w-full h-14 md:h-16 lg:h-20 object-contain mx-auto"
                        />
                      </div>
                    ))}
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
          {/* Footer content ... */}
        </footer>
      </div>
    </div>
  );
};

export default App;
