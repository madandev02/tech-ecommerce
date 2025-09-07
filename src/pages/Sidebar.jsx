import React, { useState } from "react";

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

// Sidebar component
const Sidebar = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedRating, setSelectedRating] = useState(0);

  // Handle brand checkbox change
  const handleBrandChange = (brand) => {
    const updated = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];
    setSelectedBrands(updated);
    triggerFilter(selectedCategory, updated, selectedPriceRange, selectedRating);
  };

  // Trigger the parent filter
  const triggerFilter = (category, brands, priceRange, rating) => {
    onFilterChange({
      category,
      brands,
      priceRange,
      rating,
    });
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-5 sticky top-20">
      {/* Category Filter */}
      <div className="mb-6">
        <h3 className="font-bold mb-2 text-gray-700">Category</h3>
        <select
          className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-400"
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
      <div className="mb-6">
        <h3 className="font-bold mb-2 text-gray-700">Brands</h3>
        {brands.map((b) => (
          <div key={b.name} className="flex items-center gap-2 mb-2">
            <input
              type="checkbox"
              checked={selectedBrands.includes(b.name)}
              onChange={() => handleBrandChange(b.name)}
              className="accent-blue-500"
            />
            <label className="text-gray-700">{b.name}</label>
          </div>
        ))}
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <h3 className="font-bold mb-2 text-gray-700">Price</h3>
        {priceRanges.map((p) => (
          <button
            key={p.label}
            className={`block w-full text-left mb-2 px-3 py-1 rounded ${
              selectedPriceRange === p.value
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-blue-500 hover:text-white"
            } transition`}
            onClick={() => {
              setSelectedPriceRange(p.value);
              triggerFilter(selectedCategory, selectedBrands, p.value, selectedRating);
            }}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Rating Filter */}
      <div>
        <h3 className="font-bold mb-2 text-gray-700">Rating</h3>
        {[5, 4, 3, 2, 1].map((r) => (
          <button
            key={r}
            className={`block w-full text-left mb-2 px-3 py-1 rounded ${
              selectedRating === r
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-blue-500 hover:text-white"
            } transition`}
            onClick={() => {
              setSelectedRating(r);
              triggerFilter(selectedCategory, selectedBrands, selectedPriceRange, r);
            }}
          >
            {r} stars & up
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
