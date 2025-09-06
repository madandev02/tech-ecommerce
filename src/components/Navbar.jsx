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
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2); // Puedes conectar con estado real
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const categories = ["Laptops", "Smartphones", "Accessories", "Gaming", "Smart Home"];

  // Detect clicks fuera del dropdown
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCategoriesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition duration-300">
          TechStore
        </Link>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center bg-gray-800 px-3 py-2 rounded-full shadow-inner w-1/3 transition-all duration-300 hover:shadow-lg focus-within:ring-2 ring-blue-400">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none text-sm text-white ml-2 w-full placeholder-gray-400"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-medium">

          <Link to="/" className="relative group hover:text-blue-400 transition duration-300">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </Link>

          {/* Categories Dropdown */}
          <div ref={dropdownRef} className="relative">
            <div
              className="flex items-center space-x-1 cursor-pointer hover:text-blue-400 transition duration-300"
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            >
              <span>Categories</span>
              <ChevronDownIcon className={`h-4 w-4 transition-transform ${isCategoriesOpen ? "rotate-180" : ""}`} />
            </div>

            {isCategoriesOpen && (
              <div className="absolute top-full left-0 mt-2 w-40 bg-gray-800 rounded-lg shadow-lg py-2 z-50">
                {categories.map((cat) => (
                  <Link
                    key={cat}
                    to={`/categories/${cat.toLowerCase()}`}
                    className="block px-4 py-2 hover:bg-blue-600 hover:text-white transition duration-300"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/products" className="relative group hover:text-blue-400 transition duration-300">
            All Products
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link to="/about" className="relative group hover:text-blue-400 transition duration-300">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link to="/contact" className="relative group hover:text-blue-400 transition duration-300">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link to="/login" className="hover:text-blue-400 transition duration-300">Login</Link>
          <Link to="/register" className="bg-blue-500 px-5 py-2 rounded-full hover:bg-blue-600 transition duration-300 font-semibold">
            Register
          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative cursor-pointer hover:scale-110 transition-transform duration-300">
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
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-95 backdrop-blur-md px-4 py-6 space-y-4 transition-all duration-300">
          <Link to="/" className="block hover:text-blue-400 transition duration-300">Home</Link>

          {/* Mobile Categories Dropdown */}
          <div className="space-y-1">
            <div
              className="flex items-center justify-between cursor-pointer hover:text-blue-400 transition duration-300"
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            >
              <span>Categories</span>
              <ChevronDownIcon className={`h-4 w-4 transition-transform ${isCategoriesOpen ? "rotate-180" : ""}`} />
            </div>
            {isCategoriesOpen && (
              <div className="pl-4 space-y-1">
                {categories.map((cat) => (
                  <Link
                    key={cat}
                    to={`/categories/${cat.toLowerCase()}`}
                    className="block px-2 py-1 hover:bg-blue-600 rounded transition duration-300"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/products" className="block hover:text-blue-400 transition duration-300">All Products</Link>
          <Link to="/about" className="block hover:text-blue-400 transition duration-300">About</Link>
          <Link to="/contact" className="block hover:text-blue-400 transition duration-300">Contact</Link>
          <Link to="/login" className="block hover:text-blue-400 transition duration-300">Login</Link>
          <Link to="/register" className="block bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600 transition font-semibold text-center">
            Register
          </Link>

          <Link to="/cart" className="flex items-center gap-2 hover:text-blue-400 transition duration-300">
            <ShoppingCartIcon className="h-6 w-6" />
            <span>Cart ({cartCount})</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
