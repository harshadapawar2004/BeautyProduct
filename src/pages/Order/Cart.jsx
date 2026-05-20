import React, { useEffect, useState } from "react";
import {
  FaMinus,
  FaPlus,
  FaTrash,
  FaArrowRight,
  FaLock,
  FaCheckCircle,
  FaShoppingBag,
} from "react-icons/fa";

import { MyCart } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeCart } = MyCart();

  const navigate = useNavigate();

  const [quantity, setQuantity] = useState({});

  useEffect(() => {
    const qty = {};

    cart.forEach((item) => {
      qty[item.productId._id] = item.quantity;
    });

    setQuantity(qty);
  }, [cart]);

  const increment = (id) => {
    setQuantity((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const decrement = (id) => {
    setQuantity((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  const totalPrice = cart.reduce((acc, item) => {
    const qty = quantity[item.productId._id];

    return acc + item.productId.price * qty;
  }, 0);

  return (
    <section className="min-h-screen bg-[#F8F5F2] px-5 md:px-10 py-10 overflow-hidden">
      {/* TOP HEADER */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[40px] border border-[#E8DED6] p-8 md:p-12 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* LEFT */}
            <div>
              <span className="uppercase tracking-[6px] text-[#B07B58] text-sm font-semibold">
                Shopping Cart
              </span>

              <h1 className="text-5xl md:text-6xl font-black text-[#2B211B] mt-5 leading-tight">
                Beauty Bag
              </h1>

              <p className="text-[#7A6E67] text-lg mt-5 max-w-2xl leading-relaxed">
                Your premium skincare and beauty essentials are ready for
                checkout.
              </p>
            </div>

            {/* RIGHT CARD */}
            <div className="bg-[#2B211B] rounded-[35px] p-8 text-white min-w-[280px]">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#C08A65] flex items-center justify-center">
                  <FaShoppingBag className="text-2xl" />
                </div>

                <div>
                  <p className="text-[#D8C5B8]">Cart Items</p>

                  <h2 className="text-4xl font-black mt-1">{cart.length}</h2>
                </div>
              </div>

              <div className="h-[1px] bg-white/10 my-6"></div>

              <div className="flex items-center gap-3 text-[#D8C5B8]">
                <FaCheckCircle />
                <p>Free Shipping Available</p>
              </div>
            </div>
          </div>
        </div>

        {/* EMPTY CART */}
        {cart.length === 0 ? (
          <div className="bg-white mt-10 rounded-[40px] border border-[#E8DED6] py-24 px-10 flex flex-col items-center justify-center text-center">
            <div className="w-32 h-32 rounded-full bg-[#F6EAE1] flex items-center justify-center">
              <FaShoppingBag className="text-5xl text-[#B07B58]" />
            </div>

            <h2 className="text-5xl font-black text-[#2B211B] mt-10">
              Your Cart is Empty
            </h2>

            <p className="text-[#7A6E67] text-lg mt-6 max-w-xl leading-relaxed">
              Looks like you haven’t added any beauty products yet. Explore our
              premium collection and glow naturally ✨
            </p>

            <Link to="/product">
              <button className="mt-10 bg-[#2B211B] hover:bg-[#B07B58] text-white px-10 py-5 rounded-full text-lg font-bold transition duration-300">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 mt-10">
            {/* LEFT PRODUCTS */}
            <div className="flex flex-col gap-8">
              {cart.map((item) => (
                <div
                  key={item.productId._id}
                  className="bg-white rounded-[40px] border border-[#E8DED6] overflow-hidden p-6 md:p-8 hover:-translate-y-1 transition duration-300"
                >
                  <div className="grid md:grid-cols-[240px_1fr] gap-8">
                    {/* IMAGE */}
                    <div className="bg-[#F7F1EC] rounded-[30px] p-6 flex items-center justify-center relative">
                      <span className="absolute top-5 left-5 bg-[#2B211B] text-white text-xs px-4 py-2 rounded-full font-semibold">
                        Premium
                      </span>

                      <img
                        src={item.productId.imageUrl}
                        alt={item.productId.name}
                        className="w-full h-56 object-contain hover:scale-105 transition duration-500"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="flex flex-col justify-between">
                      <div>
                        <span className="uppercase tracking-[4px] text-[#B07B58] text-sm font-semibold">
                          Beauty Care
                        </span>

                        <h2 className="text-4xl font-black text-[#2B211B] mt-4 leading-tight">
                          {item.productId.name}
                        </h2>

                        <p className="text-[#7A6E67] leading-relaxed mt-5 text-lg">
                          Luxury skincare crafted with nourishing ingredients
                          for radiant and healthy skin.
                        </p>

                        <div className="flex items-center gap-5 mt-8">
                          <h3 className="text-5xl font-black text-[#2B211B]">
                            ₹{item.productId.price}
                          </h3>

                          <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-bold">
                            In Stock
                          </span>
                        </div>
                      </div>

                      {/* ACTIONS */}
                      <div className="flex flex-wrap items-center justify-between gap-5 mt-10">
                        {/* QUANTITY */}
                        <div className="flex items-center gap-6 bg-[#F7F1EC] px-6 py-4 rounded-full border border-[#E8DED6]">
                          <button
                            onClick={() => decrement(item.productId._id)}
                            className="w-10 h-10 rounded-full bg-white text-[#2B211B] flex items-center justify-center hover:bg-[#2B211B] hover:text-white transition duration-300"
                          >
                            <FaMinus />
                          </button>

                          <p className="text-2xl font-black text-[#2B211B]">
                            {quantity[item.productId._id]}
                          </p>

                          <button
                            onClick={() => increment(item.productId._id)}
                            className="w-10 h-10 rounded-full bg-[#2B211B] text-white flex items-center justify-center hover:bg-[#B07B58] transition duration-300"
                          >
                            <FaPlus />
                          </button>
                        </div>

                        {/* REMOVE */}
                        <button
                          onClick={() => removeCart(item.productId._id)}
                          className="flex items-center gap-3 text-red-500 hover:bg-red-500 hover:text-white border border-red-200 px-6 py-4 rounded-full font-bold transition duration-300"
                        >
                          <FaTrash />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* SUMMARY */}
            <div className="sticky top-10 h-fit">
              <div className="bg-[#2B211B] text-white rounded-[40px] p-8">
                <span className="uppercase tracking-[5px] text-[#D8C5B8] text-sm">
                  Order Summary
                </span>

                <h2 className="text-4xl font-black mt-4">Checkout</h2>

                {/* PRICE */}
                <div className="mt-10 flex flex-col gap-6">
                  <div className="flex items-center justify-between text-[#D8C5B8]">
                    <p>Subtotal</p>

                    <p className="text-white font-semibold">₹{totalPrice}</p>
                  </div>

                  <div className="flex items-center justify-between text-[#D8C5B8]">
                    <p>Shipping</p>

                    <p className="text-green-400 font-semibold">Free</p>
                  </div>

                  <div className="flex items-center justify-between text-[#D8C5B8]">
                    <p>Tax</p>

                    <p className="text-white font-semibold">₹99</p>
                  </div>

                  <div className="h-[1px] bg-white/10"></div>

                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">Total</h3>

                    <h3 className="text-4xl font-black text-[#F4C7A1]">
                      ₹{totalPrice + 99}
                    </h3>
                  </div>
                </div>

                {/* FEATURES */}
                <div className="bg-white/5 rounded-[30px] p-6 mt-10 border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#B07B58] flex items-center justify-center">
                      <FaLock />
                    </div>

                    <div>
                      <h3 className="font-bold text-lg">Secure Checkout</h3>

                      <p className="text-[#D8C5B8] text-sm mt-1">
                        100% protected payment
                      </p>
                    </div>
                  </div>
                </div>

                {/* BUTTON */}
                <button
                  onClick={() => navigate("/order")}
                  className="group mt-10 w-full bg-[#F4C7A1] hover:bg-white text-[#2B211B] py-5 rounded-full text-xl font-black transition duration-300 flex items-center justify-center gap-4"
                >
                  Proceed to Checkout
                  <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
                </button>

                {/* FOOT NOTE */}
                <p className="text-center text-[#D8C5B8] text-sm mt-6">
                  Safe Payments • Trusted Beauty Products
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
