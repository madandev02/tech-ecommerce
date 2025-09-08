import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

// Categories, brands, and price ranges for filters
const categories = ["Laptop", "Headset", "Keyboard", "Monitor", "Mouse", "Smartphone", "Accessory"];
const brands = [
  { name: "Apple" },
  { name: "Samsung" },
  { name: "Razer" },
  { name: "Sony" },
  { name: "Intel" },
  { name: "Microsoft" },
  { name: "Logitech" },
];
const priceRanges = [
  { label: "$0 - $100", value: [0, 100] },
  { label: "$101 - $500", value: [101, 500] },
  { label: "$501 - $1500", value: [501, 1500] },
];

const Sidebar = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedRating, setSelectedRating] = useState(0);

  const handleBrandChange = (brand) => {
    const updated = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];
    setSelectedBrands(updated);
    triggerFilter(selectedCategory, updated, selectedPriceRange, selectedRating);
  };

  const triggerFilter = (category, brands, priceRange, rating) => {
    onFilterChange({ category, brands, priceRange, rating });
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-6 sticky top-20 space-y-8">
      {/* Category Filter */}
      <div>
        <h3 className="font-bold mb-3 text-gray-700 text-lg">Category</h3>
        <select
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 bg-gray-50 hover:bg-gray-100 transition"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            triggerFilter(e.target.value, selectedBrands, selectedPriceRange, selectedRating);
          }}
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Brand Filter */}
      <div>
        <h3 className="font-bold mb-3 text-gray-700 text-lg">Brands</h3>
        <div className="space-y-2">
          {brands.map((b) => (
            <label
              key={b.name}
              className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-blue-50 transition ${
                selectedBrands.includes(b.name) ? "bg-blue-100" : ""
              }`}
            >
              <input
                type="checkbox"
                checked={selectedBrands.includes(b.name)}
                onChange={() => handleBrandChange(b.name)}
                className="accent-blue-500 w-4 h-4"
              />
              <span className="text-gray-700 font-medium">{b.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="font-bold mb-3 text-gray-700 text-lg">Price</h3>
        <div className="space-y-2">
          {priceRanges.map((p) => (
            <button
              key={p.label}
              className={`w-full text-left px-4 py-2 rounded-lg font-medium transition ${
                selectedPriceRange === p.value
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-500 hover:text-white"
              }`}
              onClick={() => {
                setSelectedPriceRange(p.value);
                triggerFilter(selectedCategory, selectedBrands, p.value, selectedRating);
              }}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Rating Filter */}
      <div>
        <h3 className="font-bold mb-3 text-gray-700 text-lg">Rating</h3>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((r) => (
            <button
              key={r}
              className={`w-full text-left px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition ${
                selectedRating === r
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-yellow-400 hover:text-white"
              }`}
              onClick={() => {
                setSelectedRating(r);
                triggerFilter(selectedCategory, selectedBrands, selectedPriceRange, r);
              }}
            >
              {Array.from({ length: r }, (_, i) => (
                <StarIcon key={i} className="w-5 h-5 text-white" />
              ))}
              & up
            </button>
          ))}
        </div>
      </div>

      {/* Reset Filters */}
      <div className="pt-4 border-t border-gray-200">
        <button
          className="w-full py-2 px-4 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition shadow-lg"
          onClick={() => {
            setSelectedCategory("");
            setSelectedBrands([]);
            setSelectedPriceRange(null);
            setSelectedRating(0);
            triggerFilter("", [], null, 0);
          }}
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
