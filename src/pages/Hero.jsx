import { Link } from "react-router-dom";
import { FaArrowRight, FaStar, FaHeart, FaShoppingBag } from "react-icons/fa";

import { MyProduct } from "../context/ProductContext.jsx";

const Hero = () => {
  const { data } = MyProduct();

  return (
    <div className="bg-[#060606] text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center px-5 md:px-10 lg:px-20 py-16">
        {/* GRID BACKGROUND */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:70px_70px]"></div>
        </div>

        {/* GRADIENT */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/20 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[140px] rounded-full"></div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto w-full">
          {/* LEFT CONTENT */}
          <div>
            {/* SMALL BADGE */}
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-full backdrop-blur-xl">
              <div className="w-3 h-3 rounded-full bg-pink-400 animate-pulse"></div>

              <span className="uppercase tracking-[4px] text-sm text-gray-300">
                New Beauty Experience
              </span>
            </div>

            {/* TITLE */}
            <h1 className="text-6xl md:text-8xl font-black leading-[0.95] mt-10">
              SKIN
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
                REDEFINED
              </span>
            </h1>

            {/* DESC */}
            <p className="text-gray-400 text-lg leading-relaxed mt-8 max-w-xl">
              Premium skincare crafted with luxury ingredients and futuristic
              beauty innovation for flawless glowing skin.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-10">
              <Link to="/product">
                <button className="group relative overflow-hidden bg-white text-black hover:text-white px-8 py-4 rounded-full font-bold transition duration-500">
                  <span className="relative z-10 flex items-center gap-3">
                    Explore Products
                    <FaArrowRight />
                  </span>

                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 translate-y-full group-hover:translate-y-0 transition duration-500"></div>
                </button>
              </Link>

              <button className="border border-white/20 hover:border-pink-500 px-8 py-4 rounded-full font-semibold transition">
                View Collection
              </button>
            </div>

            {/* STATS */}
            <div className="flex flex-wrap gap-10 mt-16">
              <div>
                <h2 className="text-5xl font-black">15K+</h2>
                <p className="text-gray-500 mt-2">Happy Clients</p>
              </div>

              <div>
                <h2 className="text-5xl font-black">98%</h2>
                <p className="text-gray-500 mt-2">Positive Reviews</p>
              </div>

              <div>
                <h2 className="text-5xl font-black">4.9★</h2>
                <p className="text-gray-500 mt-2">Luxury Rating</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center items-center">
            {/* ROTATING CIRCLE */}
            <div className="absolute w-[520px] h-[520px] border border-white/10 rounded-full animate-spin [animation-duration:20s]"></div>

            <div className="absolute w-[420px] h-[420px] border border-pink-500/20 rounded-full"></div>

            {/* PRODUCT IMAGE */}
            <div className="relative">
              <img
                src="./images/about-banner copy.jpg"
                alt="beauty"
                className="w-full max-w-[500px] object-contain drop-shadow-[0_30px_100px_rgba(255,0,150,0.35)]"
              />
            </div>

            {/* FLOAT CARD */}
            <div className="absolute top-16 right-0 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl px-6 py-5">
              <p className="text-gray-400 text-sm">Exclusive Offer</p>

              <h2 className="text-3xl font-black mt-2 text-pink-400">
                40% OFF
              </h2>
            </div>

            {/* FLOAT CARD */}
            <div className="absolute bottom-10 left-0 bg-black/60 border border-white/10 backdrop-blur-xl rounded-3xl px-6 py-5">
              <div className="flex text-yellow-400 gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-gray-300 mt-3">Top Rated Beauty Brand</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="px-5 md:px-10 lg:px-20 py-24">
        {/* TITLE */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 max-w-7xl mx-auto mb-20">
          <div>
            <span className="uppercase tracking-[5px] text-pink-400">
              Featured Products
            </span>

            <h2 className="text-5xl md:text-6xl font-black mt-4 leading-tight">
              Beauty Essentials
            </h2>
          </div>

          <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
            Discover luxury skincare products specially crafted for radiant,
            youthful, and naturally glowing skin.
          </p>
        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {data.slice(0, 3).map((item) => (
            <div
              key={item._id}
              className="group relative bg-white/[0.03] border border-white/10 rounded-[40px] overflow-hidden hover:border-pink-500/30 transition duration-500"
            >
              {/* TOP */}
              <div className="relative h-[360px] overflow-hidden">
                {/* BG EFFECT */}
                <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 to-transparent"></div>

                {/* HEART */}
                <button className="absolute top-5 right-5 z-20 bg-black/50 hover:bg-pink-500 transition p-3 rounded-full">
                  <FaHeart />
                </button>

                {/* IMAGE */}
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-contain p-10 group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* BOTTOM */}
              <div className="p-8">
                {/* CATEGORY */}
                <span className="text-sm uppercase tracking-[4px] text-pink-400">
                  {item.category}
                </span>

                {/* NAME */}
                <Link to={`/product/${item._id}`}>
                  <h2 className="text-3xl font-black mt-4 hover:text-pink-400 transition">
                    {item.name}
                  </h2>
                </Link>

                {/* RATING */}
                <div className="flex items-center justify-between mt-6">
                  <div className="flex text-yellow-400 gap-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                  <span className="text-gray-500 text-sm">120+ Reviews</span>
                </div>

                {/* PRICE + BTN */}
                <div className="flex items-center justify-between mt-8">
                  <h3 className="text-4xl font-black">₹{item.price}</h3>

                  <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition px-5 py-4 rounded-2xl">
                    <FaShoppingBag />
                  </button>
                </div>
              </div>

              {/* HOVER LINE */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= BANNER ================= */}
      <section className="px-5 md:px-10 lg:px-20 pb-24">
        <div className="relative rounded-[50px] overflow-hidden bg-[#111] border border-white/10 max-w-7xl mx-auto">
          {/* BACKGROUND EFFECT */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500/20 via-purple-500/10 to-transparent"></div>

          <div className="grid lg:grid-cols-2 gap-10 items-center p-10 md:p-16 relative z-10">
            {/* IMAGE */}
            <div className="flex justify-center">
              <img
                src="./images/hero-banner-2.png"
                alt="banner"
                className="w-full max-w-[420px] object-contain"
              />
            </div>

            {/* TEXT */}
            <div>
              <span className="uppercase tracking-[5px] text-pink-400">
                Limited Edition
              </span>

              <h2 className="text-5xl md:text-6xl font-black leading-tight mt-6">
                Glow Beyond
                <br />
                Expectations
              </h2>

              <p className="text-gray-400 text-lg mt-6 leading-relaxed max-w-xl">
                Experience futuristic skincare designed with luxury formulas for
                a timeless beauty glow.
              </p>

              <button className="mt-10 bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition px-8 py-4 rounded-full font-bold">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
