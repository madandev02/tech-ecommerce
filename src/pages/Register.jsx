import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebookF, FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    alert("Account created successfully!");
    setFormData({ name: "", email: "", password: "" });
    setErrors({});
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 font-sans px-4">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md transform transition-all duration-500 hover:scale-105">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-600 animate-fadeIn">
          Create Your Account
        </h1>

        {/* Subtitle */}
        <p className="text-center text-gray-500 mb-8">
          Join TechStore today and explore the latest tech deals!
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="relative">
            <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className={`w-full pl-10 px-4 py-3 border rounded-xl focus:outline-none transition shadow-sm ${
                errors.name ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400 focus:border-blue-400"
              }`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={`w-full pl-10 px-4 py-3 border rounded-xl focus:outline-none transition shadow-sm ${
                errors.email ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400 focus:border-blue-400"
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className={`w-full pl-10 pr-12 px-4 py-3 border rounded-xl focus:outline-none transition shadow-sm ${
                errors.password ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400 focus:border-blue-400"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 font-medium"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
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

        {/* Social Signup (Icons Only) */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="w-12 h-12 flex items-center justify-center bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 hover:scale-110 transition-transform duration-300">
            <FaGoogle className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 flex items-center justify-center bg-blue-700 text-white rounded-full shadow-md hover:bg-blue-800 hover:scale-110 transition-transform duration-300">
            <FaFacebookF className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
