import React, { useState } from "react";
import {
  XMarkIcon, PlusIcon, MinusIcon, ChevronDownIcon,
  CreditCardIcon, BanknotesIcon, QuestionMarkCircleIcon,
  FireIcon, ClockIcon
} from "@heroicons/react/24/outline";

// Related products
const relatedProducts = [
  { id: 101, name: "Gaming Mouse", price: 49, image: "https://www.centec.cl/cdn/shop/files/pixelcut-export__2831_2920240524-24908-zkwvoi_1800x.png?v=1737574381" },
  { id: 102, name: "RGB Mousepad", price: 29, image: "https://fernapetcl.vtexassets.com/arquivos/ids/181045/782529.jpg?v=637683767443770000" },
  { id: 103, name: "Gaming Chair", price: 199, image: "https://m.media-amazon.com/images/I/51UCZe3chZS._AC_SL1000_.jpg" }
];

// Payment logos
const paymentLogos = {
  "Visa": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
  "MasterCard": "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
  "PayPal": "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
};

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Gaming Laptop", price: 1200, quantity: 1, images: ["https://www.asus.com/media/Odin/Websites/global/ProductLine/20200824120814.jpg", "https://mrclick.cl/cdn/shop/files/003_1500x1500_8_bb1c76dd-b367-4784-b4f5-bb5fa0323ef1_1200x1200.jpg?v=1739815996"], stock: 5, discount: 10, hotDeal: true },
    { id: 2, name: "Wireless Headset", price: 150, quantity: 2, images: ["https://i5.walmartimages.com/seo/Microsoft-Xbox-Wireless-Headset-for-Xbox-Series-X-S-Xbox-One-and-Windows-10-Devices_64253c60-9ccc-411b-a86b-99d699b94a2d.4844244c7e9e50a3752dcec3c3b6edc8.jpeg"], stock: 10 },
    { id: 3, name: "Mechanical Keyboard", price: 99, quantity: 1, images: ["https://m.media-amazon.com/images/I/71ZRus2YNcL._AC_UF894,1000_QL80_.jpg"], stock: 3, discount: 5 },
  ]);

  const [shipping, setShipping] = useState({ name: "", address: "", city: "", postalCode: "", country: "" });
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  const [showShipping, setShowShipping] = useState(true);
  const [showPayment, setShowPayment] = useState(false);
  const [hoveredImage, setHoveredImage] = useState({});

  const handleQuantityChange = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.min(Math.max(1, item.quantity + delta), item.stock) } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    const element = document.getElementById(`cart-item-${id}`);
    if(element){
      element.classList.add("opacity-0","scale-90","transition","duration-500");
      setTimeout(() => setCartItems(prev => prev.filter(item => item.id !== id)), 500);
    }
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity * ((100 - (item.discount || 0)) / 100),
    0
  );
  const tax = subtotal * 0.1;
  const shippingCost = cartItems.length ? 15 : 0;
  const total = subtotal + tax + shippingCost;

  const handleShippingChange = (e) => setShipping({ ...shipping, [e.target.name]: e.target.value });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 font-sans">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">🛒 Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map(item => (
              <div
                id={`cart-item-${item.id}`}
                key={item.id}
                className="flex items-center bg-white rounded-3xl shadow-lg p-4 hover:shadow-2xl transition relative overflow-hidden transform hover:scale-[1.02] group"
              >
                {/* Discount Badge */}
                {item.discount && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg z-10">{`-${item.discount}%`}</span>
                )}
                {/* Hot Deal Badge */}
                {item.hotDeal && (
                  <span className="absolute top-3 left-24 bg-yellow-400 text-white px-2 py-1 rounded-full text-sm font-bold flex items-center gap-1 z-10">
                    <FireIcon className="w-4 h-4" /> Hot Deal
                  </span>
                )}
                {/* Stock Badge */}
                <span className="absolute top-3 right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg z-10">
                  {item.quantity}x / {item.stock} in stock
                </span>

                {/* Product Images */}
                <div className="w-28 h-28 overflow-hidden rounded-xl shadow-sm relative flex-shrink-0">
                  <img
                    src={item.images[hoveredImage[item.id] || 0]}
                    alt={item.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  {item.images.length > 1 && (
                    <div className="absolute bottom-1 left-1 flex gap-1 z-20">
                      {item.images.map((img, idx) => (
                        <div
                          key={idx}
                          onMouseEnter={() => setHoveredImage({ ...hoveredImage, [item.id]: idx })}
                          className={`w-6 h-6 border-2 rounded cursor-pointer ${hoveredImage[item.id] === idx ? "border-blue-500" : "border-gray-300"}`}
                          style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="ml-5 flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-gray-800 truncate group-hover:text-blue-600 transition">{item.name}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <p className="text-blue-600 font-bold text-lg">
                      ${(item.price * ((100 - (item.discount || 0)) / 100)).toFixed(2)}
                    </p>
                    {item.discount && <QuestionMarkCircleIcon className="w-5 h-5 text-gray-400 cursor-pointer" title="Discount applied!" />}
                  </div>
                  {/* Quantity Controls */}
                  <div className="flex items-center mt-3 space-x-3">
                    <button onClick={() => handleQuantityChange(item.id, -1)} className="w-9 h-9 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 transition transform hover:scale-110">
                      <MinusIcon className="w-5 h-5 text-gray-700" />
                    </button>
                    <span className="font-medium text-gray-700">{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, 1)} className="w-9 h-9 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 transition transform hover:scale-110">
                      <PlusIcon className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                </div>

                {/* Remove Item */}
                <button onClick={() => handleRemoveItem(item.id)} className="ml-4 p-2 text-gray-500 hover:text-red-500 transition transform hover:scale-110 flex-shrink-0">
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>
            ))}

            {/* Shipping */}
            <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => setShowShipping(!showShipping)}>
                <h3 className="text-2xl font-bold mb-2 text-blue-600 flex items-center gap-2"><ClockIcon className="w-5 h-5 text-blue-600" /> Shipping Address</h3>
                <ChevronDownIcon className={`w-6 h-6 transition-transform ${showShipping ? "rotate-180" : ""}`} />
              </div>
              {showShipping && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
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
              )}
            </div>

            {/* Payment */}
            <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => setShowPayment(!showPayment)}>
                <h3 className="text-2xl font-bold mb-2 text-blue-600 flex items-center gap-2"><CreditCardIcon className="w-5 h-5 text-blue-600" /> Payment Method</h3>
                <ChevronDownIcon className={`w-6 h-6 transition-transform ${showPayment ? "rotate-180" : ""}`} />
              </div>
              {showPayment && (
                <div className="mt-4 space-y-3">
                  {["Credit Card", "Visa", "MasterCard", "PayPal", "Bank Transfer"].map(method => (
                    <div
                      key={method}
                      className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition ${paymentMethod === method ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:bg-gray-50"}`}
                      onClick={() => setPaymentMethod(method)}
                    >
                      <div className="flex items-center gap-3">
                        {method === "Credit Card" && <CreditCardIcon className="w-6 h-6 text-blue-600" />}
                        {["Visa","MasterCard","PayPal"].includes(method) && <img src={paymentLogos[method]} alt={method} className="w-10 h-6 object-contain" />}
                        {method === "Bank Transfer" && <BanknotesIcon className="w-6 h-6 text-green-600" />}
                        <span className="font-medium">{method}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Related Products */}
            <div className="mt-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">You might also like</h3>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {relatedProducts.map(p => (
                  <div key={p.id} className="min-w-[150px] bg-white shadow rounded-xl p-2 hover:shadow-2xl transition cursor-pointer flex-shrink-0">
                    <img src={p.image} alt={p.name} className="w-full h-24 object-contain rounded-md mb-2" />
                    <p className="text-sm font-medium truncate">{p.name}</p>
                    <p className="text-blue-600 font-bold">${p.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col justify-between sticky top-24">
            <h3 className="text-2xl font-bold mb-6 text-center">Order Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal <QuestionMarkCircleIcon className="w-4 h-4 inline-block" title="Sum of all items" /></span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Tax (10%) <QuestionMarkCircleIcon className="w-4 h-4 inline-block" title="Applicable taxes" /></span>
                <span className="font-semibold">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Shipping <QuestionMarkCircleIcon className="w-4 h-4 inline-block" title="Flat shipping fee" /></span>
                <span className="font-semibold">${shippingCost.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button className="mt-8 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-4 rounded-2xl font-bold text-lg hover:scale-105 transform transition shadow-lg hover:shadow-2xl animate-bounce">
              Proceed to Checkout
            </button>
            <p className="text-gray-400 text-sm mt-4 text-center">Secure checkout with SSL encryption 🔒</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
