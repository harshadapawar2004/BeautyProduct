import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  FaBoxOpen,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaRupeeSign,
  FaCheckCircle,
  FaClock,
  FaArrowRight,
  FaCube,
} from "react-icons/fa";

import { MyAuth } from "../../context/UserContextProvider";

const OrderHistory = () => {
  const { user } = MyAuth();

  const [orders, setOrders] = useState([]);

  const BASE_URL =
    "https://e-commerce-backend-5q60.onrender.com/api/v1/user/order";

  const fetchOrders = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/${user.id}`);

      setOrders(res.data || []);
    } catch (error) {
      console.log("ORDER HISTORY ERROR:", error);
    }
  };

  useEffect(() => {
    if (user?.id) {
      fetchOrders();
    }
  }, [user]);

  return (
    <section className="relative min-h-screen bg-[#07070A] overflow-hidden px-5 md:px-10 py-12">
      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/10 blur-3xl rounded-full"></div>

      {/* HEADER */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
        <div>
          <span className="text-cyan-400 uppercase tracking-[6px] text-sm font-semibold">
            Purchase Timeline
          </span>

          <h1 className="text-5xl md:text-7xl font-black text-white mt-5 leading-tight">
            Order
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
              History
            </span>
          </h1>

          <p className="text-gray-400 text-lg mt-5 max-w-2xl leading-relaxed">
            Track your skincare purchases, order updates, and premium beauty
            deliveries in one beautiful dashboard.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 gap-5">
          <div className="bg-white/5 border border-white/10 rounded-3xl px-7 py-6 backdrop-blur-xl">
            <p className="text-gray-400 text-sm">Total Orders</p>

            <h2 className="text-4xl font-black text-white mt-2">
              {orders.length}
            </h2>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 border border-white/10 rounded-3xl px-7 py-6 backdrop-blur-xl">
            <p className="text-gray-300 text-sm">Beauty Points</p>

            <h2 className="text-4xl font-black text-cyan-300 mt-2">
              240+
            </h2>
          </div>
        </div>
      </div>

      {/* EMPTY STATE */}
      {orders.length === 0 ? (
        <div className="relative z-10 min-h-[70vh] flex items-center justify-center">
          <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-12 text-center max-w-2xl overflow-hidden">
            {/* GLOW */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500 flex items-center justify-center mx-auto shadow-[0_20px_80px_rgba(34,211,238,0.3)]">
                <FaBoxOpen className="text-5xl text-white" />
              </div>

              <h2 className="text-5xl font-black text-white mt-10">
                No Orders Yet
              </h2>

              <p className="text-gray-400 text-lg mt-5 leading-relaxed max-w-lg mx-auto">
                Your beauty journey hasn’t started yet. Explore luxury skincare
                products and place your first order today.
              </p>

              <button className="group mt-10 bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-8 py-5 rounded-2xl text-lg font-bold text-white flex items-center gap-3 mx-auto hover:scale-105 transition duration-300 shadow-[0_10px_40px_rgba(34,211,238,0.3)]">
                Explore Products
                <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative z-10 flex flex-col gap-10">
          {orders.map((order, index) => (
            <div
              key={order._id}
              className="relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-8 md:p-10 shadow-[0_10px_50px_rgba(0,0,0,0.5)]"
            >
              {/* TOP GLOW */}
              <div className="absolute top-0 right-0 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl"></div>

              {/* ORDER TOP */}
              <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">
                {/* LEFT */}
                <div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-fuchsia-500 flex items-center justify-center">
                      <FaCube className="text-white text-2xl" />
                    </div>

                    <div>
                      <p className="text-gray-400 text-sm">
                        Order #{index + 1}
                      </p>

                      <h2 className="text-white text-2xl md:text-3xl font-black mt-1">
                        {order._id.slice(0, 18)}...
                      </h2>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-5 mt-7">
                    {/* DATE */}
                    <div className="flex items-center gap-3 bg-black/30 border border-white/10 rounded-2xl px-5 py-4">
                      <FaCalendarAlt className="text-yellow-400" />

                      <div>
                        <p className="text-gray-500 text-xs">Placed On</p>

                        <h4 className="text-white font-semibold">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </h4>
                      </div>
                    </div>

                    {/* TOTAL */}
                    <div className="flex items-center gap-3 bg-black/30 border border-white/10 rounded-2xl px-5 py-4">
                      <FaRupeeSign className="text-green-400" />

                      <div>
                        <p className="text-gray-500 text-xs">Total Amount</p>

                        <h4 className="text-white font-semibold">
                          ₹{order.totalAmount}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>

                {/* STATUS */}
                <div
                  className={`w-fit flex items-center gap-3 px-7 py-4 rounded-2xl font-bold text-lg ${
                    order.status === "Delivered"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-yellow-500/20 text-yellow-300"
                  }`}
                >
                  {order.status === "Delivered" ? (
                    <FaCheckCircle />
                  ) : (
                    <FaClock />
                  )}

                  {order.status || "Processing"}
                </div>
              </div>

              {/* ADDRESS */}
              <div className="relative z-10 mt-10 bg-black/30 border border-white/10 rounded-[30px] p-7">
                <div className="flex items-start gap-5">
                  <div className="bg-cyan-500/20 p-4 rounded-2xl">
                    <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
                  </div>

                  <div>
                    <p className="uppercase tracking-[4px] text-cyan-400 text-sm font-semibold">
                      Shipping Address
                    </p>

                    <p className="text-gray-300 text-lg leading-relaxed mt-3">
                      {order.shippingAddress}
                    </p>
                  </div>
                </div>
              </div>

              {/* PRODUCTS */}
              <div className="relative z-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
                {order.items.map((item) => (
                  <div
                    key={item._id}
                    className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-[30px] p-6 hover:-translate-y-2 transition duration-500"
                  >
                    {/* CARD GLOW */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10"></div>

                    <div className="relative z-10">
                      {/* TOP */}
                      <div className="flex items-center justify-between">
                        <span className="bg-cyan-500/20 text-cyan-300 text-xs font-bold px-4 py-2 rounded-full">
                          Premium Care
                        </span>

                        <span className="text-fuchsia-400 font-semibold">
                          x{item.quantity}
                        </span>
                      </div>

                      {/* NAME */}
                      <h2 className="text-2xl font-black text-white mt-6 line-clamp-2 leading-snug">
                        {item.name}
                      </h2>

                      {/* PRICE */}
                      <div className="flex items-end justify-between mt-10">
                        <div>
                          <p className="text-gray-500 text-sm">
                            Product Price
                          </p>

                          <h3 className="text-4xl font-black text-white mt-1">
                            ₹{item.price}
                          </h3>
                        </div>

                        <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-bold">
                          Ordered
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default OrderHistory;