import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero section */}
      <section className="bg-blue-600 text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About TechStore</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          At TechStore, we bring you the latest technology products to upgrade your lifestyle.
        </p>
      </section>

      {/* Our Mission & Vision */}
      <section className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h2>
          <p className="text-gray-700">
            To provide high-quality tech products at affordable prices, with outstanding customer service.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Vision</h2>
          <p className="text-gray-700">
            To become the leading online store for tech enthusiasts, offering innovation and reliability in every purchase.
          </p>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-blue-50 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to upgrade your tech?</h2>
        <a
          href="/products"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition"
        >
          Shop Now
        </a>
      </section>
    </div>
  );
};

export default About;
