import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 px-4 relative overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to our Newsletter</h2>
        <p className="mb-8 text-lg md:text-xl">Get the latest tech updates and special offers.</p>
        
        {/* Newsletter form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 rounded-full w-full sm:flex-1 text-gray-900 shadow-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-md"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Background decorative circles */}
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white opacity-10 rounded-full animate-pulse"></div>
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-white opacity-10 rounded-full animate-pulse delay-200"></div>
    </section>
  );
};

export default Newsletter;
