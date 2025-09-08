import React from "react";
import { Link } from "react-router-dom";

// Categories Data
const categories = [
  { name: "Laptops", image: "/assets/laptops.jpg" },
  { name: "Smartphones", image: "/assets/smartphones.jpg" },
  { name: "Accessories", image: "/assets/accessories.jpg" },
  { name: "Wearables", image: "/assets/wearables.jpg" },
  { name: "Gaming", image: "/assets/gaming.jpg" },
  { name: "Cameras", image: "/assets/cameras.jpg" },
  { name: "Audio", image: "/assets/audio.jpg" },
  { name: "Smart Home", image: "/assets/smarthome.jpg" },
];

const Categories = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Shop by Category
      </h2>

      {/* Grid of categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <Link
            key={i}
            to={`/categories/${cat.name.toLowerCase()}`}
            className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500"
          >
            {/* Background Image */}
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-48 sm:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition duration-500"></div>

            {/* Category Name */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-lg sm:text-xl font-extrabold text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.7)] transform group-hover:scale-110 group-hover:text-blue-500 transition duration-500">
                {cat.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
