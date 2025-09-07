import React, { useState } from "react";
import { XMarkIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const CartPage = () => {
  // --- State for cart items with stock and optional discount badges ---
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Gaming Laptop", price: 1200, quantity: 1, image: "https://via.placeholder.com/200x150", stock: 5, discount: 10 },
    { id: 2, name: "Wireless Headset", price: 150, quantity: 2, image: "https://via.placeholder.com/200x150", stock: 10 },
    { id: 3, name: "Mechanical Keyboard", price: 99, quantity: 1, image: "https://via.placeholder.com/200x150", stock: 3, discount: 5 },
  ]);

  // --- Shipping and Payment State ---
  const [shipping, setShipping] = useState({ name: "", address: "", city: "", postalCode: "", country: "" });
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");

  // --- Handle Quantity Changes with animation ---
  const handleQuantityChange = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.min(Math.max(1, item.quantity + delta), item.stock) } : item
      )
    );
  };

  // --- Remove item from cart ---
  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // --- Calculate totals with discount ---
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity * ((100 - (item.discount || 0)) / 100),
    0
  );
  const tax = subtotal * 0.1;
  const shippingCost = cartItems.length ? 15 : 0;
  const total = subtotal + tax + shippingCost;

  // --- Handle Shipping Input Change ---
  const handleShippingChange = (e) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 font-sans">
      {/* Page Title */}
      <h2 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
        🛒 Shopping Cart
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* --- Left Side: Cart Items + Shipping + Payment --- */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center bg-white rounded-3xl shadow-lg p-4 hover:shadow-2xl transition relative group overflow-hidden">
                {/* --- Discount Badge --- */}
                {item.discount && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    -{item.discount}%
                  </span>
                )}
                {/* --- Stock Badge --- */}
                <span className="absolute top-3 right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {item.quantity}x / {item.stock} in stock
                </span>

                {/* --- Product Image with hover zoom --- */}
                <div className="w-28 h-28 overflow-hidden rounded-xl shadow-sm">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* --- Product Info --- */}
                <div className="ml-5 flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                    {item.name}
                  </h3>
                  <p className="text-blue-600 font-bold text-lg mt-1">
                    ${ (item.price * ((100 - (item.discount || 0)) / 100)).toFixed(2) }
                  </p>

                  {/* --- Quantity Controls --- */}
                  <div className="flex items-center mt-3 space-x-3">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="w-9 h-9 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 transition transform hover:scale-110"
                    >
                      <MinusIcon className="w-5 h-5 text-gray-700" />
                    </button>
                    <span className="font-medium text-gray-700">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="w-9 h-9 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 transition transform hover:scale-110"
                    >
                      <PlusIcon className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                </div>

                {/* --- Remove Item Button --- */}
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="ml-4 p-2 text-gray-500 hover:text-red-500 transition transform hover:scale-110"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>
            ))}

            {/* --- Shipping Address --- */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Shipping Address</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["name","address","city","postalCode","country"].map(field => (
                  <input
                    key={field}
                    type="text"
                    name={field}
                    placeholder={field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    value={shipping[field]}
                    onChange={handleShippingChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    required
                  />
                ))}
              </div>
            </div>

            {/* --- Payment Method --- */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Payment Method</h3>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              >
                <option value="Credit Card">Credit Card</option>
                <option value="PayPal">PayPal</option>
                <option value="Bank Transfer">Bank Transfer</option>
              </select>
            </div>
          </div>

          {/* --- Right Side: Order Summary --- */}
          <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col justify-between sticky top-24">
            <h3 className="text-2xl font-bold mb-6 text-center">Order Summary</h3>

            {/* --- Totals --- */}
            <div className="space-y-3">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Tax (10%)</span>
                <span className="font-semibold">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Shipping</span>
                <span className="font-semibold">${shippingCost.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* --- Checkout Button --- */}
            <button className="mt-8 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-4 rounded-2xl font-bold text-lg hover:scale-105 transform transition shadow-lg">
              Proceed to Checkout
            </button>

            {/* --- Security Info --- */}
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
