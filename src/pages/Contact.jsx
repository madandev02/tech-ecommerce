import React, { useState } from "react";
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // Handle input changes
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Page Header */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-blue-600">
          Contact Us
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Have a question or need support? Our team is here to help you. Fill out the form or use the contact info below.
        </p>
      </section>

      {/* Main Contact Section */}
      <section className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Card - Contact Info */}
        <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">Get in Touch</h2>
          <p className="text-gray-700 text-center mb-6">
            Reach out to us via any of the following methods. We're happy to assist you!
          </p>

          {/* Address */}
          <div className="flex items-center gap-4">
            <MapPinIcon className="w-8 h-8 text-blue-600" />
            <div>
              <p className="font-semibold text-gray-800">Address</p>
              <p className="text-gray-500">123 Tech Avenue, Santiago, Chile</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <EnvelopeIcon className="w-8 h-8 text-blue-600" />
            <div>
              <p className="font-semibold text-gray-800">Email</p>
              <p className="text-gray-500">support@techstore.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <PhoneIcon className="w-8 h-8 text-blue-600" />
            <div>
              <p className="font-semibold text-gray-800">Phone</p>
              <p className="text-gray-500">+56 9 1234 5678</p>
            </div>
          </div>

          {/* Embedded Map */}
          <div className="mt-6 rounded-xl overflow-hidden shadow-md">
            <iframe
              title="TechStore Map"
              src="https://maps.google.com/maps?q=santiago&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-56 border-0"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Right Card - Contact Form */}
        <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Input */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
            {/* Email Input */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
            {/* Message Textarea */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              rows="6"
              required
            ></textarea>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Call-to-Action Footer */}
      <section className="bg-blue-50 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Need more assistance?</h2>
        <p className="text-gray-700 mb-6">
          Our support team is always ready to help you with any questions or concerns.
        </p>
        <a
          href="/products"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition"
        >
          Browse Products
        </a>
      </section>
    </div>
  );
};

export default Contact;
