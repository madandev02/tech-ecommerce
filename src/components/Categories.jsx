import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Laptops', image: '/src/assets/laptops.jpg' },
  { name: 'Smartphones', image: '/src/assets/smartphones.jpg' },
  { name: 'Accessories', image: '/src/assets/accessories.jpg' },
  { name: 'Wearables', image: '/src/assets/wearables.jpg' },
];

const Categories = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Shop by Category
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat, i) => (
          <Link
            key={i}
            to={`/categories/${cat.name.toLowerCase()}`}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer"
          >
            <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-24 h-24 object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
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
