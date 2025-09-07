import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-20 px-4">
      {/* Decorative blurred circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white opacity-10 rounded-full animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white opacity-10 rounded-full animate-pulse delay-300"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 animate-fadeIn">
          Stay Ahead with Tech Updates
        </h2>
        <p className="text-lg md:text-xl text-white mb-10 animate-fadeIn delay-150">
          Subscribe to our newsletter and get exclusive offers, new arrivals, and tech insights directly to your inbox.
        </p>

        {/* Newsletter Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mx-auto max-w-xl animate-fadeIn delay-300"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-6 py-3 rounded-full w-full sm:flex-1 text-gray-900 font-medium shadow-lg border border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-transparent transition transform hover:scale-105"
          />
          <button
            type="submit"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-xl hover:bg-gray-100 transition transform hover:scale-105 hover:shadow-2xl"
          >
            Subscribe
          </button>
        </form>

        {/* Optional subtitle */}
        <p className="mt-6 text-sm text-white/70 animate-fadeIn delay-500">
          No spam. Unsubscribe anytime.
        </p>
      </div>

      {/* Custom animations (optional) */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
        .animate-fadeIn.delay-150 {
          animation-delay: 0.15s;
        }
        .animate-fadeIn.delay-300 {
          animation-delay: 0.3s;
        }
        .animate-fadeIn.delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
};

export default Newsletter;
