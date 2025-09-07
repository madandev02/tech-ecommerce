import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created successfully!");
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 font-sans px-4">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md hover:shadow-2xl transition-all duration-500">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-600">
          Create Your Account
        </h1>

        {/* Subtitle */}
        <p className="text-center text-gray-500 mb-8">
          Join TechStore today and start exploring the latest technology deals!
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition shadow-sm"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition shadow-sm"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition shadow-sm"
            required
          />

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300"
          >
            Register
          </button>
        </form>

        {/* Footer Text */}
        <p className="mt-6 text-center text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-semibold hover:underline">
            Login
          </Link>
        </p>

        {/* Optional Social Signup (modern touch) */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="flex-1 bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition font-medium">
            Register with Google
          </button>
          <button className="flex-1 bg-blue-700 text-white py-2 rounded-xl hover:bg-blue-800 transition font-medium">
            Register with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
