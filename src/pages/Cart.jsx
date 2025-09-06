import React, { useState } from "react";
import { XMarkIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Gaming Laptop", price: 1200, quantity: 1, image: "https://via.placeholder.com/200x150" },
    { id: 2, name: "Wireless Headset", price: 150, quantity: 2, image: "https://via.placeholder.com/200x150" },
    { id: 3, name: "Mechanical Keyboard", price: 99, quantity: 1, image: "https://via.placeholder.com/200x150" },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">🛒 Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center bg-white rounded-3xl shadow-lg p-4 hover:shadow-2xl transition relative group">
                {/* Status Badge */}
                <span className="absolute top-3 right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {item.quantity}x
                </span>

                <img src={item.image} alt={item.name} className="w-28 h-28 object-cover rounded-xl shadow-sm" />

                <div className="ml-5 flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">{item.name}</h3>
                  <p className="text-blue-600 font-bold text-lg mt-1">${item.price}</p>

                  {/* Quantity Controls */}
                  <div className="flex items-center mt-3 space-x-3">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="w-9 h-9 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 transition"
                    >
                      <MinusIcon className="w-5 h-5 text-gray-700" />
                    </button>
                    <span className="font-medium text-gray-700">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="w-9 h-9 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 transition"
                    >
                      <PlusIcon className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="ml-4 p-2 text-gray-500 hover:text-red-500 transition"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col justify-between">
            <h3 className="text-2xl font-bold mb-6">Order Summary</h3>

            <div className="space-y-3">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Tax (10%)</span>
                <span className="font-semibold">${tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button className="mt-8 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-4 rounded-2xl font-bold text-lg hover:scale-105 transform transition shadow-lg">
              Proceed to Checkout
            </button>

            <p className="text-gray-400 text-sm mt-4 text-center">
              Secure checkout with SSL encryption 🔒
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
