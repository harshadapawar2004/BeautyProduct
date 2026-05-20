import React from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
  FaStar,
  FaGem,
  FaCheckCircle,
} from "react-icons/fa";

import { MyAuth } from "../../context/UserContextProvider";

function Register() {
  const {
    handleRegister,
    formData,
    setFormData,
    errors,
    showPass,
    setShowPass,
  } = MyAuth();

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#060816] flex items-center justify-center px-5 py-10">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/images/register-bg-2.jpg"
          alt="register"
          className="w-full h-full object-cover opacity-15"
        />
      </div>

      {/* GRID EFFECT */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* GLOW */}
      <div className="absolute top-[-100px] left-[-100px] w-[450px] h-[450px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-[450px] h-[450px] bg-pink-500/20 blur-[120px] rounded-full"></div>

      {/* MAIN CARD */}
      <div className="relative z-10 w-full max-w-7xl rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.6)] grid lg:grid-cols-2">
        
        {/* LEFT SIDE */}
        <div className="relative hidden lg:flex flex-col justify-between p-14 bg-gradient-to-br from-cyan-500/10 via-transparent to-pink-500/10 overflow-hidden">
          
          {/* CIRCLE */}
          <div className="absolute top-10 right-10 w-40 h-40 border border-cyan-400/20 rounded-full"></div>

          <div className="absolute bottom-10 left-10 w-60 h-60 border border-pink-400/10 rounded-full"></div>

          {/* TOP TEXT */}
          <div className="relative z-10">
            <span className="uppercase tracking-[6px] text-cyan-300 text-sm font-semibold">
              Premium Beauty Access
            </span>

            <h1 className="text-6xl font-black text-white leading-tight mt-6">
              Begin Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-400">
                Glow Journey
              </span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mt-8 max-w-xl">
              Join thousands of beauty lovers discovering premium skincare,
              luxury cosmetics, and personalized self-care experiences.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative z-10 flex justify-center my-10">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-full"></div>

              <img
                src="/images/register-model.png"
                alt="beauty-model"
                className="relative w-[430px] object-contain drop-shadow-[0_30px_80px_rgba(255,255,255,0.15)]"
              />
            </div>
          </div>

          {/* FEATURES */}
          <div className="relative z-10 grid grid-cols-3 gap-5">
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-5 text-center hover:-translate-y-2 transition duration-300">
              <FaGem className="mx-auto text-3xl text-cyan-300 mb-4" />

              <h3 className="text-white font-bold">Luxury Care</h3>

              <p className="text-gray-400 text-sm mt-2">
                Premium skincare products
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-5 text-center hover:-translate-y-2 transition duration-300">
              <FaStar className="mx-auto text-3xl text-pink-400 mb-4" />

              <h3 className="text-white font-bold">Top Rated</h3>

              <p className="text-gray-400 text-sm mt-2">
                Trusted by beauty experts
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-5 text-center hover:-translate-y-2 transition duration-300">
              <FaCheckCircle className="mx-auto text-3xl text-green-400 mb-4" />

              <h3 className="text-white font-bold">Safe Products</h3>

              <p className="text-gray-400 text-sm mt-2">
                Dermatologically tested
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex flex-col justify-center px-8 md:px-16 py-16">
          
          {/* SMALL GLOW */}
          <div className="absolute top-0 right-0 w-52 h-52 bg-pink-500/10 blur-3xl rounded-full"></div>

          {/* HEADER */}
          <div className="relative z-10 mb-12">
            <span className="uppercase tracking-[5px] text-cyan-300 font-semibold">
              Create New Account
            </span>

            <h2 className="text-5xl font-black text-white mt-5 leading-tight">
              Join The
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-400">
                Beauty Club
              </span>
            </h2>

            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full mt-6"></div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleRegister}
            className="relative z-10 flex flex-col gap-7"
          >
            {/* NAME */}
            <div>
              <label className="text-gray-300 text-sm mb-3 block">
                Full Name
              </label>

              <div className="relative">
                <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-300" />

                <input
                  type="text"
                  placeholder="Enter your full name"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-5 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400 focus:bg-white/10 transition duration-300"
                />
              </div>

              {errors.name && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.name}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-gray-300 text-sm mb-3 block">
                Email Address
              </label>

              <div className="relative">
                <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-pink-400" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-5 text-white placeholder:text-gray-500 outline-none focus:border-pink-400 focus:bg-white/10 transition duration-300"
                />
              </div>

              {errors.email && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.email}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-gray-300 text-sm mb-3 block">
                Password
              </label>

              <div className="relative">
                <FaLock className="absolute left-5 top-1/2 -translate-y-1/2 text-yellow-300" />

                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Create strong password"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-14 text-white placeholder:text-gray-500 outline-none focus:border-yellow-300 focus:bg-white/10 transition duration-300"
                />

                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-pink-400 text-lg"
                >
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {errors.password && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.password}
                </p>
              )}
            </div>

            {/* TERMS */}
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <input
                type="checkbox"
                className="accent-pink-500 w-4 h-4"
              />

              <p>
                I agree to the Terms & Conditions and Privacy Policy
              </p>
            </div>

            {/* BUTTON */}
            <button className="group mt-4 relative overflow-hidden bg-gradient-to-r from-cyan-500 to-pink-500 hover:scale-[1.02] text-white py-5 rounded-2xl text-lg font-bold transition duration-300 shadow-[0_10px_40px_rgba(236,72,153,0.35)]">
              
              <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition duration-700"></span>

              <span className="relative flex items-center justify-center gap-3">
                Create Account
                <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
              </span>
            </button>
          </form>

          {/* FOOTER */}
          <p className="relative z-10 text-center text-gray-400 mt-10 text-lg">
            Already have an account?{" "}
            <Link to="/login">
              <span className="text-cyan-300 font-bold hover:text-pink-400 transition duration-300">
                Login Here
              </span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Register;