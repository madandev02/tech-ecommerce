import React from 'react';
import { Link } from 'react-router-dom';

// Categories Data - Added more categories
const categories = [
  { name: 'Laptops', image: '/src/assets/laptops.jpg' },
  { name: 'Smartphones', image: '/src/assets/smartphones.jpg' },
  { name: 'Accessories', image: '/src/assets/accessories.jpg' },
  { name: 'Wearables', image: '/src/assets/wearables.jpg' },
  { name: 'Gaming', image: '/src/assets/gaming.jpg' },
  { name: 'Cameras', image: '/src/assets/cameras.jpg' },
  { name: 'Audio', image: '/src/assets/audio.jpg' },
  { name: 'Smart Home', image: '/src/assets/smarthome.jpg' },
];

const Categories = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Shop by Category
      </h2>

      {/* Grid of categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map((cat, i) => (
          <Link
            key={i}
            to={`/categories/${cat.name.toLowerCase()}`}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-500 cursor-pointer flex flex-col items-center"
          >
            {/* Image Container */}
            <div className="relative w-full h-36 sm:h-40 flex items-center justify-center bg-gray-50">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Category Name */}
            <div className="p-3 sm:p-4 text-center">
              <h3 className="text-sm sm:text-base font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
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
