import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 flex flex-col">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
        )}
        {product.isSale && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">SALE</span>
        )}
      </div>
      <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
      <p className="text-gray-600 mt-2 flex-1">{product.description}</p>

      {/* Rating (5 stars example) */}
      <div className="flex mt-2 gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < product.rating ? "text-yellow-400" : "text-gray-300"}>★</span>
        ))}
      </div>

      <div className="mt-4 flex justify-between items-center">
        <p className="text-lg font-bold text-gray-800">${product.price}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition shadow-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
