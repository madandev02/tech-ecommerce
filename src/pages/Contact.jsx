import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <section className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-12 text-center text-blue-600">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side - Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">Get in Touch</h2>
            <p className="text-gray-700 mb-4">We are happy to help you. Reach out to us via:</p>

            <div className="mb-4">
              <h3 className="font-semibold text-gray-800">📍 Address</h3>
              <p className="text-gray-500">123 Tech Avenue, Santiago, Chile</p>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold text-gray-800">✉ Email</h3>
              <p className="text-gray-500">support@techstore.com</p>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold text-gray-800">📞 Phone</h3>
              <p className="text-gray-500">+56 9 1234 5678</p>
            </div>

            <div className="mt-6">
              <iframe
                title="TechStore Map"
                src="https://maps.google.com/maps?q=santiago&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-48 rounded-xl border-0"
              ></iframe>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                rows="5"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
