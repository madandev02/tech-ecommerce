import React from "react";
import { AcademicCapIcon, EyeIcon, UsersIcon } from "@heroicons/react/24/solid";

const teamMembers = [
  { name: "Alice Johnson", role: "CEO", image: "https://www.shutterstock.com/image-photo/confident-smiling-middle-aged-business-600nw-2451544833.jpg" },
  { name: "Bob Smith", role: "CTO", image: "https://static.vecteezy.com/system/resources/thumbnails/038/025/202/small_2x/ai-generated-medium-shot-of-confident-mixed-race-man-wearing-elegant-suit-looking-at-camera-on-white-background-photo.jpg" },
  { name: "Clara Lee", role: "Head of Marketing", image: "https://images.unsplash.com/photo-1616325629936-99a9013c29c6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXNpYW4lMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D" },
  { name: "David Brown", role: "Lead Developer", image: "https://www.shutterstock.com/image-photo/smiling-busy-young-latin-business-600nw-2392837517.jpg" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About TechStore</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          At TechStore, we bring you the latest technology products to upgrade your lifestyle.
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Mission Card */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col items-center text-center">
          <AcademicCapIcon className="w-12 h-12 text-blue-600 mb-4" />
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h2>
          <p className="text-gray-700">
            To provide high-quality tech products at affordable prices, with outstanding customer service.
          </p>
        </div>
        {/* Vision Card */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col items-center text-center">
          <EyeIcon className="w-12 h-12 text-blue-600 mb-4" />
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Vision</h2>
          <p className="text-gray-700">
            To become the leading online store for tech enthusiasts, offering innovation and reliability in every purchase.
          </p>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">Our Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Products Sold */}
          <div>
            <p className="text-4xl font-extrabold text-blue-600">500+</p>
            <p className="text-gray-600">Products Sold</p>
          </div>
          {/* Happy Customers */}
          <div>
            <p className="text-4xl font-extrabold text-blue-600">10K+</p>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          {/* Years in Business */}
          <div>
            <p className="text-4xl font-extrabold text-blue-600">8</p>
            <p className="text-gray-600">Years in Business</p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">Our Team</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition flex flex-col items-center"
            >
              <UsersIcon className="w-12 h-12 text-blue-600 mb-4" />
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">What Our Customers Say</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition">
            <p className="text-gray-700 mb-4">
              "TechStore made upgrading my setup so easy! Great products and service."
            </p>
            <div className="flex items-center gap-4">
              <img src="https://st.depositphotos.com/1003989/4006/i/450/depositphotos_40064511-stock-photo-call-center-operator.jpg" alt="Client 1" className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-semibold text-gray-800">Emily R.</p>
                <p className="text-yellow-400">⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition">
            <p className="text-gray-700 mb-4">
              "Fast delivery and excellent customer support. Highly recommended!"
            </p>
            <div className="flex items-center gap-4">
              <img src="https://img.freepik.com/free-photo/smiling-man-sitting-cafe-table-gesturing_1262-1141.jpg?semt=ais_hybrid&w=740&q=80" alt="Client 2" className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-semibold text-gray-800">Michael T.</p>
                <p className="text-yellow-400">⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
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
