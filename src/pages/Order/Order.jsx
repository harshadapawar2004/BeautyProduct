import React, { useEffect, useState } from "react";
import {
  FaMapMarkedAlt,
  FaBoxOpen,
  FaLock,
  FaWallet,
  FaArrowRight,
  FaCheckCircle,
  FaTruckMoving,
} from "react-icons/fa";

import { MyAuth } from "../../context/UserContextProvider";
import { MyCart } from "../../context/CartContext";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Order = () => {
  const { user } = MyAuth();
  const { cart, fetchCart } = MyCart();

  const [shippingAddress, setShippingAddress] = useState("");

  const BASE_URL =
    "https://e-commerce-backend-5q60.onrender.com/api/v1/user/order/checkout";

  const navigate = useNavigate();

  useEffect(() => {
    if (user?.id) {
      fetchCart();
    }
  }, [user]);

  const handleChange = (e) => {
    setShippingAddress(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(BASE_URL, {
        userId: user.id,
        shippingAddress,
      });

      await fetchCart();

      toast.success("Order Placed Successfully ✨");

      navigate("/orderHistory");
    } catch (error) {
      toast.error("Order Failed ❌");
    }
  };

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.productId.price * item.quantity;
  }, 0);

  return (
    <section className="min-h-screen bg-[#F7F3EE] px-5 md:px-10 py-10 overflow-hidden">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white border border-[#E9DDD2] rounded-[40px] p-8 md:p-12 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            {/* LEFT */}
            <div>
              <span className="uppercase tracking-[6px] text-[#B57B55] font-semibold text-sm">
                Checkout Process
              </span>

              <h1 className="text-5xl md:text-6xl font-black text-[#2B211B] mt-5 leading-tight">
                Complete Your
                <br />
                Beauty Order
              </h1>

              <p className="text-[#7A6D66] text-lg mt-6 max-w-2xl leading-relaxed">
                Secure your luxury skincare collection and get it delivered to
                your doorstep with premium care.
              </p>
            </div>

            {/* STATUS CARD */}
            <div className="bg-[#2B211B] rounded-[35px] p-8 text-white min-w-[300px]">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-[#C38B66] flex items-center justify-center">
                  <FaCheckCircle className="text-2xl" />
                </div>

                <div>
                  <p className="text-[#D9C7BA]">Secure Checkout</p>

                  <h2 className="text-3xl font-black mt-1">
                    100% Safe
                  </h2>
                </div>
              </div>

              <div className="h-[1px] bg-white/10 my-6"></div>

              <div className="space-y-3 text-[#D9C7BA]">
                <div className="flex items-center gap-3">
                  <FaTruckMoving />
                  <p>Fast Delivery Available</p>
                </div>

                <div className="flex items-center gap-3">
                  <FaLock />
                  <p>Protected Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN */}
        <div className="grid lg:grid-cols-[1fr_420px] gap-10 mt-10">
          {/* LEFT FORM */}
          <div className="bg-white border border-[#E9DDD2] rounded-[40px] p-8 md:p-12 shadow-sm">
            {/* TITLE */}
            <div className="flex items-center gap-5 mb-12">
              <div className="w-20 h-20 rounded-[28px] bg-[#F4E7DD] flex items-center justify-center">
                <FaMapMarkedAlt className="text-4xl text-[#B57B55]" />
              </div>

              <div>
                <h2 className="text-4xl font-black text-[#2B211B]">
                  Shipping Details
                </h2>

                <p className="text-[#7A6D66] mt-2">
                  Enter your delivery address carefully
                </p>
              </div>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              {/* ADDRESS */}
              <div>
                <label className="text-[#2B211B] font-semibold block mb-4">
                  Shipping Address
                </label>

                <textarea
                  rows="8"
                  value={shippingAddress}
                  onChange={handleChange}
                  placeholder="Enter your complete shipping address..."
                  className="w-full bg-[#FAF7F4] border border-[#E9DDD2] rounded-[30px] px-6 py-5 text-[#2B211B] text-lg placeholder:text-[#9C8F88] outline-none resize-none focus:border-[#B57B55] transition duration-300"
                ></textarea>
              </div>

              {/* FEATURES */}
              <div className="grid sm:grid-cols-3 gap-5">
                <div className="bg-[#FAF7F4] border border-[#E9DDD2] rounded-[28px] p-6 text-center hover:-translate-y-1 transition duration-300">
                  <FaTruckMoving className="mx-auto text-4xl text-[#B57B55] mb-4" />

                  <h3 className="font-bold text-[#2B211B]">
                    Fast Delivery
                  </h3>

                  <p className="text-[#7A6D66] text-sm mt-2">
                    Quick & safe shipping
                  </p>
                </div>

                <div className="bg-[#FAF7F4] border border-[#E9DDD2] rounded-[28px] p-6 text-center hover:-translate-y-1 transition duration-300">
                  <FaLock className="mx-auto text-4xl text-[#2B211B] mb-4" />

                  <h3 className="font-bold text-[#2B211B]">
                    Secure Payment
                  </h3>

                  <p className="text-[#7A6D66] text-sm mt-2">
                    Encrypted transactions
                  </p>
                </div>

                <div className="bg-[#FAF7F4] border border-[#E9DDD2] rounded-[28px] p-6 text-center hover:-translate-y-1 transition duration-300">
                  <FaWallet className="mx-auto text-4xl text-green-600 mb-4" />

                  <h3 className="font-bold text-[#2B211B]">
                    Easy Checkout
                  </h3>

                  <p className="text-[#7A6D66] text-sm mt-2">
                    Smooth order process
                  </p>
                </div>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="group mt-4 bg-[#2B211B] hover:bg-[#B57B55] text-white py-5 rounded-full text-xl font-black flex items-center justify-center gap-4 transition duration-300"
              >
                Place Your Order

                <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
              </button>
            </form>
          </div>

          {/* RIGHT SUMMARY */}
          <div className="sticky top-10 h-fit">
            <div className="bg-[#2B211B] text-white rounded-[40px] p-8">
              {/* HEADING */}
              <div className="flex items-center gap-5 mb-10">
                <div className="w-16 h-16 rounded-2xl bg-[#C38B66] flex items-center justify-center">
                  <FaBoxOpen className="text-2xl" />
                </div>

                <div>
                  <h2 className="text-3xl font-black">
                    Order Summary
                  </h2>

                  <p className="text-[#D9C7BA] mt-1">
                    {cart.length} Products Added
                  </p>
                </div>
              </div>

              {/* PRODUCTS */}
              <div className="flex flex-col gap-5 max-h-[400px] overflow-y-auto pr-2">
                {cart.map((item) => (
                  <div
                    key={item.productId._id}
                    className="bg-white/5 border border-white/10 rounded-[30px] p-4 flex gap-4"
                  >
                    {/* IMAGE */}
                    <div className="bg-white rounded-2xl p-3">
                      <img
                        src={item.productId.imageUrl}
                        alt={item.productId.name}
                        className="w-20 h-20 object-contain"
                      />
                    </div>

                    {/* DETAILS */}
                    <div className="flex flex-col justify-between flex-1">
                      <div>
                        <h3 className="font-bold text-lg line-clamp-2">
                          {item.productId.name}
                        </h3>

                        <p className="text-[#D9C7BA] text-sm mt-2">
                          Qty : {item.quantity}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <h2 className="text-2xl font-black">
                          ₹{item.productId.price}
                        </h2>

                        <span className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full font-bold">
                          In Stock
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* PRICE */}
              <div className="mt-10 space-y-5">
                <div className="flex items-center justify-between text-[#D9C7BA]">
                  <p>Subtotal</p>

                  <p className="text-white font-semibold">
                    ₹{totalPrice}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[#D9C7BA]">
                  <p>Shipping</p>

                  <p className="text-green-400 font-semibold">
                    Free
                  </p>
                </div>

                <div className="flex items-center justify-between text-[#D9C7BA]">
                  <p>Tax</p>

                  <p className="text-white">₹99</p>
                </div>

                <div className="h-[1px] bg-white/10"></div>

                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">
                    Total
                  </h2>

                  <h2 className="text-4xl font-black text-[#F6C9A5]">
                    ₹{totalPrice + 99}
                  </h2>
                </div>
              </div>

              {/* FOOTER */}
              <div className="bg-white/5 rounded-[28px] p-5 border border-white/10 mt-10">
                <div className="flex items-center gap-4">
                  <FaCheckCircle className="text-green-400 text-2xl" />

                  <div>
                    <h3 className="font-bold">
                      Trusted Beauty Store
                    </h3>

                    <p className="text-[#D9C7BA] text-sm mt-1">
                      Premium skincare with secure checkout
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;