import React from "react";
import {
  FaSearch,
  FaSlidersH,
  FaThLarge,
  FaBars,
  FaChevronDown,
  FaHandSparkles,
} from "react-icons/fa";

import { MyProduct } from "../context/ProductContext";

const SortingNavbar = () => {
  const { data } = MyProduct();

  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#0E0E13] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-[-120px] left-[-120px] w-[250px] h-[250px] bg-pink-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[250px] h-[250px] bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10 p-6 md:p-8">
        {/* TOP SECTION */}
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">
          {/* LEFT */}
          <div className="flex items-start gap-5">
            {/* ICON */}
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg">
              <FaHandSparkles className="text-white text-2xl" />
            </div>

            {/* TEXT */}
            <div>
              <p className="uppercase tracking-[5px] text-pink-400 text-xs">
                Premium Collection
              </p>

              <h1 className="text-4xl md:text-5xl font-black text-white mt-3 leading-tight">
                Discover Beauty
              </h1>

              <p className="text-gray-500 mt-4 max-w-xl">
                Explore luxurious skincare and beauty products specially curated
                for glowing and radiant skin.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col lg:flex-row gap-4 w-full xl:w-auto">
            {/* SEARCH */}
            <div className="relative flex-1 lg:w-[320px]">
              <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-pink-400" />

              <input
                type="text"
                placeholder="Search luxury beauty..."
                className="w-full bg-white/[0.04] border border-white/10 rounded-3xl py-4 pl-14 pr-5 text-white placeholder:text-gray-500 outline-none focus:border-pink-500 transition"
              />
            </div>

            {/* SORT */}
            <div className="relative">
              <select className="appearance-none bg-white/[0.04] border border-white/10 hover:border-pink-500 rounded-3xl px-6 py-4 pr-14 text-white outline-none cursor-pointer min-w-[230px] transition">
                <option className="bg-[#111]">Sort Products</option>

                <option className="bg-[#111]">Price : Low to High</option>

                <option className="bg-[#111]">Price : High to Low</option>

                <option className="bg-[#111]">New Arrivals</option>

                <option className="bg-[#111]">Best Selling</option>

                <option className="bg-[#111]">Top Rated</option>
              </select>

              <FaChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-pink-400 pointer-events-none" />
            </div>

            {/* FILTER BUTTON */}
            <button className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-pink-500 to-purple-600 px-7 py-4 font-bold text-white shadow-[0_10px_40px_rgba(236,72,153,0.35)] hover:scale-105 transition duration-300">
              <span className="relative z-10 flex items-center gap-3">
                <FaSlidersH className="group-hover:rotate-90 transition duration-500" />
                Filters
              </span>
            </button>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* RESULT */}
          <div className="flex flex-wrap items-center gap-4">
            {/* PRODUCT COUNT */}
            <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/20 px-5 py-3 rounded-2xl">
              <h2 className="text-white font-bold text-lg">
                {data.length} Products
              </h2>
            </div>

            {/* STATUS */}
            <div className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-3">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

              <p className="text-gray-400">Showing luxury beauty collections</p>
            </div>
          </div>

          {/* VIEW TOGGLE */}
          <div className="flex items-center gap-4">
            {/* GRID */}
            <button className="group w-16 h-16 rounded-3xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white shadow-lg hover:scale-105 transition duration-300">
              <FaThLarge className="text-xl group-hover:rotate-12 transition" />
            </button>

            {/* LIST */}
            <button className="group w-16 h-16 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-pink-500 text-white flex items-center justify-center transition duration-300">
              <FaBars className="text-xl group-hover:scale-125 transition" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SortingNavbar;
