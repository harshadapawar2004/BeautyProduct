import React from "react";
import {
  FaLeaf,
  FaSpa,
  FaRecycle,
  FaHeart,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

const About = () => {
  const features = [
    {
      title: "Organic Formula",
      desc: "Premium botanical ingredients for naturally glowing skin.",
      icon: <FaLeaf />,
      color: "from-green-400 to-emerald-500",
    },
    {
      title: "Luxury Care",
      desc: "Gentle skincare crafted for daily self-care rituals.",
      icon: <FaSpa />,
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Eco Packaging",
      desc: "Sustainable beauty products with eco-friendly packaging.",
      icon: <FaRecycle />,
      color: "from-blue-400 to-cyan-500",
    },
    {
      title: "Cruelty Free",
      desc: "100% ethical products with zero animal testing.",
      icon: <FaHeart />,
      color: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#07070B] py-24 px-5 md:px-10 lg:px-20">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-pink-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-180px] right-[-180px] w-[450px] h-[450px] bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* TAG */}
            <div className="inline-flex items-center gap-3 bg-white/[0.04] border border-white/10 px-5 py-3 rounded-full">
              <div className="w-3 h-3 rounded-full bg-pink-400 animate-pulse"></div>

              <span className="uppercase tracking-[4px] text-pink-400 text-sm font-semibold">
                About BloomSkin
              </span>
            </div>

            {/* TITLE */}
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mt-8">
              Beauty Inspired
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-300">
                By Nature
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="text-gray-400 text-lg leading-relaxed mt-8 max-w-2xl">
              BloomSkin is a luxury skincare brand focused on natural beauty,
              self-care, and confidence. We combine organic ingredients with
              modern skincare science to create products that nourish, protect,
              and enhance your skin naturally.
            </p>

            <p className="text-gray-500 text-lg leading-relaxed mt-6 max-w-2xl">
              Every product is designed with love, sustainability, and premium
              quality to help you experience radiant beauty every day.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-5 mt-12">
              <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-6">
                <h2 className="text-4xl font-black text-pink-400">10K+</h2>

                <p className="text-gray-500 mt-2">Happy Customers</p>
              </div>

              <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-6">
                <h2 className="text-4xl font-black text-yellow-300">250+</h2>

                <p className="text-gray-500 mt-2">Beauty Products</p>
              </div>

              <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-6">
                <h2 className="text-4xl font-black text-purple-400">4.9★</h2>

                <p className="text-gray-500 mt-2">Customer Rating</p>
              </div>
            </div>

            {/* BUTTON */}
            <button className="group mt-12 relative overflow-hidden rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-5 text-lg font-bold text-white shadow-[0_10px_40px_rgba(236,72,153,0.35)] hover:scale-105 transition duration-300">
              <span className="relative z-10 flex items-center gap-4">
                Explore Our Story
                <FaArrowRight className="group-hover:translate-x-2 transition duration-300" />
              </span>
            </button>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="relative flex justify-center">
            {/* IMAGE CARD */}
            <div className="relative group">
              {/* OUTER GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 blur-3xl rounded-[50px]"></div>

              {/* MAIN CARD */}
              <div className="relative overflow-hidden rounded-[45px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-2xl">
                {/* IMAGE */}
                <div className="overflow-hidden rounded-[35px]">
                  <img
                    src="/images/about-banner.jpg"
                    alt="BloomSkin"
                    className="w-full lg:w-[500px] h-[650px] object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                {/* FLOATING REVIEW CARD */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl px-8 py-5 shadow-2xl w-[85%]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Trusted By</p>

                      <h2 className="text-3xl font-black text-white mt-1">
                        10,000+
                      </h2>
                    </div>

                    <div className="flex text-yellow-400 gap-1 text-lg">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURE SECTION */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8 mt-28">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.03] p-8 hover:-translate-y-2 transition duration-500"
            >
              {/* GLOW */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-10 blur-3xl rounded-full`}
              ></div>

              {/* ICON */}
              <div
                className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-3xl shadow-lg`}
              >
                {item.icon}
              </div>

              {/* TEXT */}
              <h2 className="text-3xl font-black text-white mt-8">
                {item.title}
              </h2>

              <p className="text-gray-500 leading-relaxed mt-5">{item.desc}</p>

              {/* LINE */}
              <div className="mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
