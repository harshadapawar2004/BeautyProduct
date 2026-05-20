import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowRight,
  FaHeart,
  FaLeaf,
  FaGem,
  FaSpa,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* TOP WAVE */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>

      {/* BACKGROUND EFFECTS */}
      <div className="absolute -top-40 left-[-100px] w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-[-150px] right-[-100px] w-[450px] h-[450px] bg-purple-500/20 rounded-full blur-[140px]"></div>

      {/* GRID PATTERN */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-24">
        {/* NEWSLETTER CARD */}
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 md:p-14 mb-20">
          {/* INNER GLOW */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>

          <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
            {/* LEFT */}
            <div>
              <span className="uppercase tracking-[6px] text-pink-400 font-semibold">
                Beauty Newsletter
              </span>

              <h1 className="text-4xl md:text-6xl font-black mt-5 leading-tight">
                Glow With
                <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-300 bg-clip-text text-transparent">
                  Cosmetics
                </span>
              </h1>

              <p className="text-gray-300 text-lg mt-6 leading-relaxed max-w-xl">
                Get skincare tips, exclusive beauty launches, premium offers,
                and self-care inspiration directly to your inbox.
              </p>

              {/* FEATURES */}
              <div className="flex flex-wrap gap-5 mt-8">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl">
                  <FaLeaf className="text-green-400" />
                  <p className="text-sm text-gray-200">Natural Products</p>
                </div>

                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl">
                  <FaGem className="text-pink-400" />
                  <p className="text-sm text-gray-200">Luxury Care</p>
                </div>

                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl">
                  <FaSpa className="text-yellow-400" />
                  <p className="text-sm text-gray-200">Daily Glow</p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="bg-black/40 border border-white/10 rounded-[35px] p-8 backdrop-blur-xl">
              <h2 className="text-3xl font-bold text-white">Subscribe Now</h2>

              <p className="text-gray-400 mt-3 leading-relaxed">
                Join thousands of beauty lovers and stay updated with the latest
                skincare trends.
              </p>

              {/* INPUT */}
              <div className="mt-8 space-y-5">
                <div className="relative">
                  <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-pink-400" />

                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-5 text-white placeholder:text-gray-500 outline-none focus:border-pink-500 transition duration-300"
                  />
                </div>

                <button className="group w-full flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 hover:scale-[1.02] text-white py-5 rounded-2xl text-lg font-bold shadow-[0_10px_40px_rgba(236,72,153,0.35)] transition duration-300">
                  Subscribe Now
                  <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 pb-20">
          {/* BRAND */}
          <div>
            <h1 className="text-5xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-300 bg-clip-text text-transparent">
              Cosmetics
            </h1>

            <p className="text-gray-400 mt-6 leading-relaxed">
              Elevating your skincare journey with luxurious beauty essentials,
              natural ingredients, and timeless glow.
            </p>

            {/* CONTACT */}
            <div className="flex flex-col gap-5 mt-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                  <FaPhoneAlt className="text-pink-400" />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Call Us</p>
                  <p className="text-white font-semibold">+91 7410521933</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <FaEnvelope className="text-purple-400" />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <p className="text-white font-semibold">
                    pawarhd2004@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h2 className="text-2xl font-bold mb-8 relative w-fit">
              Quick Links
              <span className="absolute left-0 -bottom-2 w-12 h-1 rounded-full bg-pink-500"></span>
            </h2>

            <ul className="space-y-5">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Products", path: "/product" },
                { name: "Contact", path: "/contact" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="group flex items-center gap-3 text-gray-400 hover:text-white transition duration-300"
                  >
                    <span className="w-2 h-2 rounded-full bg-pink-500 group-hover:w-4 transition-all duration-300"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h2 className="text-2xl font-bold mb-8 relative w-fit">
              Services
              <span className="absolute left-0 -bottom-2 w-12 h-1 rounded-full bg-purple-500"></span>
            </h2>

            <ul className="space-y-5">
              {[
                "Skincare Products",
                "Beauty Essentials",
                "Luxury Collection",
                "Organic Cosmetics",
              ].map((service, index) => (
                <li
                  key={index}
                  className="text-gray-400 hover:text-pink-400 transition duration-300 cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h2 className="text-2xl font-bold mb-8 relative w-fit">
              Connect
              <span className="absolute left-0 -bottom-2 w-12 h-1 rounded-full bg-yellow-400"></span>
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Follow BloomSkin on social media and explore the latest beauty
              inspirations.
            </p>

            {/* SOCIAL ICONS */}
            <div className="grid grid-cols-2 gap-5 mt-8">
              <a
                href="https://www.linkedin.com/in/prateek-bahad-a1b985167"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 bg-white/5 border border-white/10 hover:border-pink-500 hover:bg-pink-500/10 rounded-2xl px-5 py-4 transition duration-300"
              >
                <FaLinkedinIn className="text-xl text-pink-400" />
                <span className="text-gray-300 group-hover:text-white">
                  LinkedIn
                </span>
              </a>

              <a
                href="https://github.com/prateek205"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 bg-white/5 border border-white/10 hover:border-white hover:bg-white/10 rounded-2xl px-5 py-4 transition duration-300"
              >
                <FaGithub className="text-xl text-white" />
                <span className="text-gray-300 group-hover:text-white">
                  GitHub
                </span>
              </a>

              <a
                href="#"
                className="group flex items-center gap-4 bg-white/5 border border-white/10 hover:border-pink-500 hover:bg-pink-500/10 rounded-2xl px-5 py-4 transition duration-300"
              >
                <FaInstagram className="text-xl text-pink-400" />
                <span className="text-gray-300 group-hover:text-white">
                  Instagram
                </span>
              </a>

              <a
                href="#"
                className="group flex items-center gap-4 bg-white/5 border border-white/10 hover:border-blue-500 hover:bg-blue-500/10 rounded-2xl px-5 py-4 transition duration-300"
              >
                <FaFacebookF className="text-xl text-blue-400" />
                <span className="text-gray-300 group-hover:text-white">
                  Facebook
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 py-8">
          <p className="text-gray-500 text-center md:text-left">
            © 2026 Cosmetics. Crafted for beauty lovers worldwide.
          </p>

          <div className="flex items-center gap-3 text-gray-400">
            Made with
            <FaHeart className="text-pink-500 animate-pulse" />
            by Harshada Pawar
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
