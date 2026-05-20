import React from "react";
import {
  FaSpa,
  FaLeaf,
  FaPumpSoap,
  FaMagic,
  FaHeart,
  FaSlidersH,
  FaCheck,
} from "react-icons/fa";

const FilterSidebar = () => {
  const categories = [
    {
      name: "Skincare",
      icon: <FaSpa />,
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Face Care",
      icon: <FaHeart />,
      color: "from-red-500 to-pink-500",
    },
    {
      name: "Body Care",
      icon: <FaPumpSoap />,
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "Organic",
      icon: <FaLeaf />,
      color: "from-green-400 to-emerald-500",
    },
    {
      name: "Makeup",
      icon: <FaMagic />,
      color: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <aside className="relative w-full md:w-[330px] overflow-hidden rounded-[40px] border border-white/10 bg-[#0F0F14] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
      {/* BACKGROUND EFFECT */}
      <div className="absolute top-[-100px] right-[-100px] w-[250px] h-[250px] bg-pink-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-120px] left-[-120px] w-[250px] h-[250px] bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10 p-8">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="uppercase tracking-[5px] text-pink-400 text-xs">
              Smart Filter
            </p>

            <h1 className="text-4xl font-black text-white mt-3">
              Discover
            </h1>
          </div>

          {/* ICON BOX */}
          <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg">
            <FaSlidersH className="text-white text-2xl" />
          </div>
        </div>

        {/* SEARCH BOX */}
        <div className="mb-10">
          <input
            type="text"
            placeholder="Search category..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-pink-500 transition"
          />
        </div>

        {/* CATEGORY SECTION */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">
              Categories
            </h2>

            <span className="text-gray-500 text-sm">
              5 Items
            </span>
          </div>

          {/* CATEGORY CARDS */}
          <div className="flex flex-col gap-4">
            {categories.map((item, index) => (
              <label
                key={index}
                className="group relative cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="peer hidden"
                />

                <div className="flex items-center justify-between bg-white/[0.03] border border-white/10 rounded-3xl p-5 hover:border-pink-500/40 transition duration-300 peer-checked:border-pink-500 peer-checked:bg-pink-500/10">
                  
                  {/* LEFT */}
                  <div className="flex items-center gap-4">
                    {/* ICON */}
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-xl shadow-lg`}
                    >
                      {item.icon}
                    </div>

                    {/* TEXT */}
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {item.name}
                      </h3>

                      <p className="text-gray-500 text-sm">
                        Premium Products
                      </p>
                    </div>
                  </div>

                  {/* CHECK */}
                  <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center peer-checked:bg-pink-500 peer-checked:border-pink-500 transition">
                    <FaCheck className="text-white text-xs opacity-0 peer-checked:opacity-100 transition" />
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* PRICE SECTION */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">
              Price Range
            </h2>

            <span className="text-pink-400 font-semibold">
              ₹2500
            </span>
          </div>

          {/* RANGE */}
          <div className="relative">
            <input
              type="range"
              min="100"
              max="5000"
              className="w-full accent-pink-500 cursor-pointer"
            />

            <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
              <span>₹100</span>

              <span>₹5000</span>
            </div>
          </div>
        </div>

        {/* BEAUTY TAGS */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Popular Tags
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              "Glow",
              "Luxury",
              "Organic",
              "Trending",
              "Natural",
              "Premium",
            ].map((tag, index) => (
              <button
                key={index}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-pink-500 hover:border-pink-500 text-gray-300 hover:text-white text-sm transition"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* BUTTON */}
        <button className="group relative overflow-hidden mt-12 w-full rounded-3xl py-5 font-bold text-lg text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-[1.02] transition duration-300 shadow-[0_10px_40px_rgba(236,72,153,0.35)]">
          <span className="relative z-10 flex items-center justify-center gap-3">
            Apply Filters
            <FaCheck className="group-hover:rotate-12 transition" />
          </span>
        </button>
      </div>
    </aside>
  );
};

export default FilterSidebar;