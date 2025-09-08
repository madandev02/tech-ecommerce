import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Navbar = ({ setNavbarHeight }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const dropdownRef = useRef(null);
  const navRef = useRef(null);

  const categories = [
    { name: "Laptops", icon: "💻" },
    { name: "Smartphones", icon: "📱" },
    { name: "Accessories", icon: "🎧" },
    { name: "Gaming", icon: "🎮" },
    { name: "Smart Home", icon: "🏠" },
  ];

  // Dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCategoriesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // navbar hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // navbar height
  useLayoutEffect(() => {
    if (navRef.current) {
      setNavbarHeight(navRef.current.offsetHeight);
    }
  }, [setNavbarHeight]);

  return (
    <nav
      ref={navRef}
      className={`fixed w-full z-50 transition-transform duration-300 bg-gray-900 shadow-md ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-400 hover:text-blue-600 transition duration-300">
          TechStore
        </Link>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center bg-gray-800 px-2 py-1 rounded-full shadow-inner w-1/3 hover:shadow-lg transition-all">
          <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none text-sm text-white ml-2 w-full placeholder-gray-400"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4 font-medium text-sm">
          <Link to="/" className="text-white hover:text-blue-400 transition duration-300">Home</Link>

          {/* Categories Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <div
              className="flex items-center text-white space-x-1 cursor-pointer hover:text-blue-400 transition duration-300"
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            >
              <span>Categories</span>
              <ChevronDownIcon className={`h-3 w-3 transition-transform ${isCategoriesOpen ? "rotate-180" : ""}`} />
            </div>
            {isCategoriesOpen && (
              <div className="absolute top-full left-0 mt-1 w-40 text-white bg-gray-900 rounded-lg shadow-lg py-1 z-50">
                {categories.map((cat) => (
                  <Link
                    key={cat.name}
                    to={`/categories/${cat.name.toLowerCase()}`}
                    className="flex items-center gap-2 px-3 py-1 hover:bg-gray-700 hover:text-blue-400 transition text-sm"
                  >
                    <span>{cat.icon}</span>
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/products" className="text-white hover:text-blue-400 transition duration-300 text-sm">All Products</Link>
          <Link to="/about" className="text-white hover:text-blue-400 transition duration-300 text-sm">About</Link>
          <Link to="/contact" className="text-white hover:text-blue-400 transition duration-300 text-sm">Contact</Link>
          <Link to="/login" className="text-white hover:text-blue-400 transition duration-300 text-sm">Login</Link>
          <Link
            to="/register"
            className="bg-blue-500 px-3 py-1 rounded-full hover:bg-blue-600 transition duration-300 font-semibold text-sm"
          >
            Register
          </Link>
          <Link to="/cart" className="relative cursor-pointer hover:scale-105 transition-transform duration-300">
            <ShoppingCartIcon className="h-5 w-5 text-white hover:text-blue-400 transition-colors duration-300" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1 animate-pulse">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <XMarkIcon className="h-6 w-6 text-white" /> : <Bars3Icon className="h-6 w-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-95 backdrop-blur-md px-4 py-4 space-y-3 transition-all duration-300 text-sm">
          <Link to="/" className="block text-white hover:text-blue-400 transition duration-300">Home</Link>
          <div className="space-y-1">
            <div
              className="flex items-center justify-between cursor-pointer text-white hover:text-blue-400 transition duration-300"
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            >
              <span>Categories</span>
              <ChevronDownIcon className={`h-4 w-4 transition-transform ${isCategoriesOpen ? "rotate-180" : ""}`} />
            </div>
            {isCategoriesOpen && (
              <div className="pl-3 space-y-1">
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
          <Link to="/products" className="block text-white hover:text-blue-400 transition duration-300">All Products</Link>
          <Link to="/about" className="block text-white hover:text-blue-400 transition duration-300">About</Link>
          <Link to="/contact" className="block text-white hover:text-blue-400 transition duration-300">Contact</Link>
          <Link to="/login" className="block text-white hover:text-blue-400 transition duration-300">Login</Link>
          <Link
            to="/register"
            className="block bg-blue-500 px-4 py-1 rounded-full hover:bg-blue-600 transition font-semibold text-center text-white"
          >
            Register
          </Link>
          <Link to="/cart" className="flex items-center gap-2 text-white hover:text-blue-400 transition duration-300">
            <ShoppingCartIcon className="h-5 w-5" />
            <span>Cart ({cartCount})</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
