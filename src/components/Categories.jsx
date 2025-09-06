import React from 'react';

const categories = [
  { name: 'Laptops', image: '/src/assets/laptops.jpg' },
  { name: 'Smartphones', image: '/src/assets/smartphones.jpg' },
  { name: 'Accessories', image: '/src/assets/accessories.jpg' },
  { name: 'Wearables', image: '/src/assets/wearables.jpg' },
];

const Categories = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl p-8 flex flex-col items-center justify-center hover:scale-105 transition shadow-lg cursor-pointer"
          >
            <img src={cat.image} alt={cat.name} className="w-20 h-20 object-contain mb-4" />
            <h3 className="text-xl font-semibold">{cat.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
