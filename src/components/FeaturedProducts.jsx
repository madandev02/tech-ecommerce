import React from 'react';
import ProductCard from './ProductCard';

const featuredProducts = [
  { id:1, name:'Ultra Gaming Laptop', description:'Extreme performance for gaming.', price:1799.99, image:'/src/assets/laptop.jpg', isNew:true, rating:5 },
  { id:2, name:'Smartphone Ultra', description:'Top camera and battery.', price:1099.99, image:'/src/assets/smartphone.jpg', isSale:true, rating:4 },
  { id:3, name:'Pro Headphones', description:'Noise cancelling and comfy.', price:299.99, image:'/src/assets/headphones.jpg', rating:5 },
  { id:4, name:'Mechanical Keyboard Pro', description:'RGB and tactile keys.', price:149.99, image:'/src/assets/keyboard.jpg', rating:5 },
];

const FeaturedProducts = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Best Sellers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
