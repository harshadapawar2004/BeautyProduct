import React from "react";
import { Link } from "react-router-dom";

import {
  FaHeart,
  FaShoppingBag,
  FaStar,
  FaArrowRight,
  FaEye,
  FaBolt,
} from "react-icons/fa";

import { MyProduct } from "../context/ProductContext";
import { MyCart } from "../context/CartContext";

const AllProducts = () => {
  const { data } = MyProduct();
  const { handleCart } = MyCart();

  return (
    <section className="relative overflow-hidden bg-[#07070B] min-h-screen px-5 md:px-10 lg:px-16 py-14">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-[-150px] left-[-150px] w-[350px] h-[350px] bg-pink-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-150px] right-[-150px] w-[350px] h-[350px] bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* HEADER */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 mb-16">
        
        {/* LEFT */}
        <div>
          <span className="uppercase tracking-[6px] text-pink-400 text-sm font-semibold">
            Luxury Collection
          </span>

          <h1 className="text-5xl md:text-7xl font-black text-white mt-5 leading-tight">
            Beauty Store
          </h1>

          <p className="text-gray-500 text-lg mt-6 max-w-2xl leading-relaxed">
            Discover premium skincare and beauty essentials specially crafted
            for modern luxury beauty lovers.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-5">
          <div className="bg-white/[0.04] border border-white/10 rounded-3xl px-6 py-4">
            <p className="text-gray-500 text-sm">
              Total Products
            </p>

            <h2 className="text-3xl font-black text-white mt-1">
              {data.length}
            </h2>
          </div>

          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl px-6 py-4 shadow-lg">
            <p className="text-pink-100 text-sm">
              Trending
            </p>

            <h2 className="text-3xl font-black text-white mt-1">
              2026
            </h2>
          </div>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="relative z-10 grid sm:grid-cols-2 xl:grid-cols-3 gap-10">
        {data.map((item) => (
          <div
            key={item._id}
            className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] hover:border-pink-500/30 transition duration-500"
          >
            {/* TOP BAR */}
            <div className="absolute top-5 left-5 right-5 z-20 flex items-center justify-between">
              
              {/* STOCK */}
              <span
                className={`px-4 py-2 rounded-full text-xs font-bold backdrop-blur-xl ${
                  item.stock > 0
                    ? "bg-green-500/20 text-green-400 border border-green-500/20"
                    : "bg-red-500/20 text-red-400 border border-red-500/20"
                }`}
              >
                {item.stock > 0 ? "Available" : "Sold Out"}
              </span>

              {/* ACTIONS */}
              <div className="flex items-center gap-3">
                <button className="w-11 h-11 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 hover:bg-pink-500 transition duration-300 flex items-center justify-center text-white">
                  <FaHeart />
                </button>

                <Link
                  to={`/product/${item._id}`}
                  className="w-11 h-11 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 hover:bg-purple-500 transition duration-300 flex items-center justify-center text-white"
                >
                  <FaEye />
                </Link>
              </div>
            </div>

            {/* IMAGE SECTION */}
            <div className="relative h-[380px] overflow-hidden">
              
              {/* BACKGROUND EFFECT */}
              <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 via-transparent to-purple-500/10"></div>

              {/* CIRCLE */}
              <div className="absolute top-1/2 left-1/2 w-[250px] h-[250px] rounded-full border border-white/10 -translate-x-1/2 -translate-y-1/2"></div>

              {/* PRODUCT IMAGE */}
              <img
                src={item.imageUrl}
                alt={item.name}
                className="relative z-10 w-full h-full object-contain p-10 group-hover:scale-110 group-hover:rotate-3 transition duration-700"
              />

              {/* DISCOUNT */}
              <div className="absolute bottom-5 left-5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl px-4 py-3 shadow-lg">
                <p className="text-xs text-pink-100">
                  Limited Offer
                </p>

                <h3 className="text-white font-black text-lg">
                  20% OFF
                </h3>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-7">
              
              {/* CATEGORY */}
              <div className="flex items-center justify-between">
                <span className="uppercase tracking-[4px] text-pink-400 text-xs font-bold">
                  {item.category}
                </span>

                <div className="flex items-center gap-1 text-yellow-400">
                  <FaStar />
                  <span className="text-sm text-white font-semibold">
                    4.9
                  </span>
                </div>
              </div>

              {/* NAME */}
              <Link to={`/product/${item._id}`}>
                <h2 className="text-3xl font-black text-white mt-5 leading-snug hover:text-pink-400 transition">
                  {item.name}
                </h2>
              </Link>

              {/* DESCRIPTION */}
              <p className="text-gray-500 mt-4 leading-relaxed">
                Premium beauty essentials crafted for radiant and healthy skin.
              </p>

              {/* PRICE */}
              <div className="flex items-end justify-between mt-8">
                <div>
                  <h3 className="text-5xl font-black text-white">
                    ₹{item.price}
                  </h3>

                  <p className="text-green-400 text-sm mt-2">
                    Free Express Delivery
                  </p>
                </div>

                {/* LIGHTNING */}
                <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400">
                  <FaBolt />
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex gap-4 mt-8">
                
                {/* ADD TO CART */}
                <button
                  onClick={() => handleCart(item)}
                  className="group flex-1 relative overflow-hidden rounded-3xl bg-gradient-to-r from-pink-500 to-purple-600 py-4 font-bold text-white hover:scale-[1.02] transition duration-300 shadow-[0_10px_40px_rgba(236,72,153,0.35)]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <FaShoppingBag />

                    Add To Cart

                    <FaArrowRight className="group-hover:translate-x-1 transition" />
                  </span>
                </button>

                {/* VIEW */}
                <Link
                  to={`/product/${item._id}`}
                  className="w-16 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-pink-500 hover:bg-pink-500 text-white flex items-center justify-center transition duration-300"
                >
                  <FaEye />
                </Link>
              </div>
            </div>

            {/* HOVER LINE */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
          </div>
        ))}
      </div>

      {/* LOAD MORE */}
      <div className="relative z-10 flex items-center justify-center mt-20">
        <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-10 py-5 text-lg font-bold text-white shadow-[0_10px_40px_rgba(236,72,153,0.35)] hover:scale-105 transition duration-300">
          
          <span className="relative z-10 flex items-center gap-4">
            Explore More Products

            <FaArrowRight className="group-hover:translate-x-2 transition duration-300" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default AllProducts;