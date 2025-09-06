import React, { useState } from "react";
import { ShoppingCartIcon, Bars3Icon, XMarkIcon, MagnifyingGlassIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const categories = ["Laptops", "Smartphones", "Accessories", "Gaming", "Smart Home"];

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition duration-300 cursor-pointer">
            TechStore
          </span>
        </div>

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
          <a href="/" className="relative group hover:text-blue-400 transition duration-300">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </a>

          {/* Categories Dropdown */}
          <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setIsCategoriesOpen(true)}
            onMouseLeave={() => setIsCategoriesOpen(false)}
          >
            <div className="flex items-center space-x-1 hover:text-blue-400 transition duration-300">
              <span>Categories</span>
              <ChevronDownIcon className="h-4 w-4" />
            </div>

            {isCategoriesOpen && (
              <div className="absolute top-full left-0 mt-2 w-40 bg-gray-800 rounded-lg shadow-lg py-2 z-50">
                {categories.map((cat) => (
                  <a
                    key={cat}
                    href={`/categories/${cat.toLowerCase()}`}
                    className="block px-4 py-2 hover:bg-blue-600 hover:text-white transition duration-300"
                  >
                    {cat}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="/products" className="relative group hover:text-blue-400 transition duration-300">
            All Products
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </a>

          <a href="/about" className="relative group hover:text-blue-400 transition duration-300">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </a>

          <a href="/contact" className="relative group hover:text-blue-400 transition duration-300">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </a>

          {/* Login / Register */}
          <a href="/login" className="hover:text-blue-400 transition duration-300">Login</a>
          <a href="/register" className="bg-blue-500 px-5 py-2 rounded-full hover:bg-blue-600 transition duration-300 font-semibold">
            Register
          </a>

          {/* Cart */}
          <div className="relative cursor-pointer hover:scale-110 transition-transform duration-300">
            <ShoppingCartIcon className="h-6 w-6 text-white hover:text-blue-400 transition-colors duration-300" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 animate-pulse">
                {cartCount}
              </span>
            )}
          </div>
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
          <a href="/" className="block hover:text-blue-400 transition duration-300">Home</a>

          {/* Categories Dropdown Mobile */}
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
                  <a
                    key={cat}
                    href={`/categories/${cat.toLowerCase()}`}
                    className="block px-2 py-1 hover:bg-blue-600 rounded transition duration-300"
                  >
                    {cat}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="/products" className="block hover:text-blue-400 transition duration-300">All Products</a>
          <a href="/about" className="block hover:text-blue-400 transition duration-300">About</a>
          <a href="/contact" className="block hover:text-blue-400 transition duration-300">Contact</a>

          {/* Mobile Search */}
          <div className="flex items-center bg-gray-800 px-3 py-2 rounded-full shadow-inner">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm text-white ml-2 w-full placeholder-gray-400"
            />
          </div>

          {/* Login / Register */}
          <a href="/login" className="block hover:text-blue-400 transition duration-300">Login</a>
          <a href="/register" className="block bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600 transition font-semibold text-center">
            Register
          </a>

          {/* Cart */}
          <div className="flex items-center gap-2">
            <ShoppingCartIcon className="h-6 w-6 hover:text-blue-400 transition duration-300" />
            <span>Cart ({cartCount})</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
