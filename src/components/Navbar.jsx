import React, { useState, useRef, useEffect } from "react";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu open state
  const [cartCount, setCartCount] = useState(2); // Cart count (can connect to real state)
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false); // Categories dropdown state
  const [showNav, setShowNav] = useState(true); // Navbar show/hide on scroll
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll

  const categories = [
    { name: "Laptops", icon: "💻" },
    { name: "Smartphones", icon: "📱" },
    { name: "Accessories", icon: "🎧" },
    { name: "Gaming", icon: "🎮" },
    { name: "Smart Home", icon: "🏠" },
  ];

  const dropdownRef = useRef(null);

  // Handle clicks outside dropdown & scroll
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCategoriesOpen(false);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowNav(false); // Hide navbar on scroll down
      } else {
        setShowNav(true); // Show navbar on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed w-full z-50 transition-transform duration-300 bg-gray-900 shadow-lg ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-400 hover:text-blue-600 transition duration-300"
        >
          TechStore
        </Link>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex items-center bg-gray-800 px-3 py-2 rounded-full shadow-inner w-1/3 transition-all duration-300 hover:shadow-lg focus-within:ring-2 ring-blue-500">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none text-sm text-white ml-2 w-full placeholder-gray-400"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-medium">
          {/* Home Link */}
          <Link
            to="/"
            className="relative group text-white hover:text-blue-400 transition duration-300"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </Link>

          {/* Categories Dropdown */}
          <div ref={dropdownRef} className="relative">
            <div
              className="flex items-center text-white space-x-1 cursor-pointer hover:text-blue-400 transition duration-300"
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            >
              <span>Categories</span>
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform ${
                  isCategoriesOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {isCategoriesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 text-white bg-gray-900 rounded-lg shadow-lg py-2 z-50">
                {categories.map((cat) => (
                  <Link
                    key={cat.name}
                    to={`/categories/${cat.name.toLowerCase()}`}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 hover:text-blue-400 transition duration-300"
                  >
                    <span>{cat.icon}</span>
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Other Links */}
          <Link
            to="/products"
            className="relative group text-white hover:text-blue-400 transition duration-300"
          >
            All Products
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/about"
            className="relative group text-white hover:text-blue-400 transition duration-300"
          >
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/contact"
            className="relative group text-white hover:text-blue-400 transition duration-300"
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </Link>

          {/* Auth Buttons */}
          <Link
            to="/login"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-blue-500 px-5 py-2 rounded-full hover:bg-blue-600 transition duration-300 font-semibold"
          >
            Register
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative cursor-pointer hover:scale-110 transition-transform duration-300"
          >
            <ShoppingCartIcon className="h-6 w-6 text-white hover:text-blue-400 transition-colors duration-300" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 animate-pulse">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <XMarkIcon className="h-6 w-6 text-white" /> : <Bars3Icon className="h-6 w-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-95 backdrop-blur-md px-4 py-6 space-y-4 transition-all duration-300">
          <Link to="/" className="block text-white hover:text-blue-400 transition duration-300">Home</Link>

          {/* Mobile Categories Dropdown */}
          <div className="space-y-1">
            <div
              className="flex items-center justify-between cursor-pointer text-white hover:text-blue-400 transition duration-300"
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            >
              <span>Categories</span>
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform ${isCategoriesOpen ? "rotate-180" : ""}`}
              />
            </div>
            {isCategoriesOpen && (
              <div className="pl-4 space-y-1">
                {categories.map((cat) => (
                  <Link
                    key={cat.name}
                    to={`/categories/${cat.name.toLowerCase()}`}
                    className="block px-2 py-1 hover:bg-blue-600 rounded transition duration-300"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Other Mobile Links */}
          <Link to="/products" className="block text-white hover:text-blue-400 transition duration-300">All Products</Link>
          <Link to="/about" className="block text-white hover:text-blue-400 transition duration-300">About</Link>
          <Link to="/contact" className="block text-white hover:text-blue-400 transition duration-300">Contact</Link>
          <Link to="/login" className="block text-white hover:text-blue-400 transition duration-300">Login</Link>
          <Link
            to="/register"
            className="block bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600 transition font-semibold text-center text-white"
          >
            Register
          </Link>
          <Link to="/cart" className="flex items-center gap-2 text-white hover:text-blue-400 transition duration-300">
            <ShoppingCartIcon className="h-6 w-6" />
            <span>Cart ({cartCount})</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
