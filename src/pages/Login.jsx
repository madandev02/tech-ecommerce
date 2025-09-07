import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login successful!");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 font-sans px-4">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md hover:shadow-2xl transition-all duration-500">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-600">
          Login to TechStore
        </h1>

        {/* Subtitle */}
        <p className="text-center text-gray-500 mb-8">
          Welcome back! Enter your credentials to access your account.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition shadow-sm"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition shadow-sm"
            required
          />

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300"
          >
            Login
          </button>
        </form>

        {/* Footer Text */}
        <p className="mt-6 text-center text-gray-500">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 font-semibold hover:underline">
            Register
          </Link>
        </p>

        {/* Optional Social Login (modern touch) */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="flex-1 bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition font-medium">
            Login with Google
          </button>
          <button className="flex-1 bg-blue-700 text-white py-2 rounded-xl hover:bg-blue-800 transition font-medium">
            Login with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
