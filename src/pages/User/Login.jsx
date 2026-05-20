import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
  FaGoogle,
  FaApple,
} from "react-icons/fa";

import { MyAuth } from "../../context/UserContextProvider";

const Login = () => {
  const { login, setEmail, setPassword, showPass, setShowPass } = MyAuth();

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#070707] flex items-center justify-center px-5 py-10">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1974&auto=format&fit=crop"
          alt="beauty-bg"
          className="w-full h-full object-cover opacity-20 scale-110"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-pink-950/40"></div>

      {/* GLOW */}
      <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-pink-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl"></div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 w-full max-w-7xl grid lg:grid-cols-2 overflow-hidden rounded-[45px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_20px_100px_rgba(0,0,0,0.7)]">
        
        {/* LEFT SIDE */}
        <div className="hidden lg:flex relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1974&auto=format&fit=crop"
            alt="model"
            className="w-full h-full object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

          {/* FLOATING CONTENT */}
          <div className="absolute bottom-0 left-0 p-14">
            <span className="uppercase tracking-[6px] text-pink-300 text-sm font-semibold">
              Cosmetics
            </span>

            <h1 className="text-6xl font-black text-white leading-tight mt-5">
              Reveal Your
              <br />
              Natural Glow
            </h1>

            <p className="text-gray-300 text-lg mt-6 max-w-md leading-relaxed">
              Luxury skincare products designed for confidence,
              elegance, and radiant beauty every single day.
            </p>

            {/* STATS */}
            <div className="flex items-center gap-10 mt-10">
              <div>
                <h2 className="text-4xl font-bold text-white">10K+</h2>

                <p className="text-pink-200 text-sm mt-1">
                  Happy Customers
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-white">4.9★</h2>

                <p className="text-pink-200 text-sm mt-1">
                  Product Rating
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-center px-7 sm:px-12 lg:px-16 py-14">
          {/* LOGO */}
          <div className="mb-10">
            <h1 className="text-5xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-300 bg-clip-text text-transparent">
              Cosmetics
            </h1>

            <p className="text-gray-400 mt-3 text-lg">
              Sign in to continue your beauty journey ✨
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={login} className="flex flex-col gap-6">
            {/* EMAIL */}
            <div className="relative group">
              <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-pink-400 text-lg" />

              <input
                type="email"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-3xl py-5 pl-14 pr-5 text-white placeholder:text-gray-500 outline-none focus:border-pink-500 focus:bg-white/10 transition duration-300"
              />
            </div>

            {/* PASSWORD */}
            <div className="relative group">
              <FaLock className="absolute left-5 top-1/2 -translate-y-1/2 text-pink-400 text-lg" />

              <input
                type={showPass ? "text" : "password"}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-3xl py-5 pl-14 pr-14 text-white placeholder:text-gray-500 outline-none focus:border-pink-500 focus:bg-white/10 transition duration-300"
              />

              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-pink-400 text-lg"
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* OPTIONS */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
                <input type="checkbox" className="accent-pink-500" />
                Remember me
              </label>

              <button
                type="button"
                className="text-pink-400 hover:text-pink-300 transition"
              >
                Forgot Password?
              </button>
            </div>

            {/* LOGIN BUTTON */}
            <button className="group mt-2 flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-[length:200%] hover:bg-right text-white py-5 rounded-3xl text-lg font-bold transition-all duration-500 shadow-[0_15px_40px_rgba(236,72,153,0.4)]">
              Sign In
              <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
            </button>
          </form>

          {/* DIVIDER */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-[1px] bg-white/10"></div>

            <p className="text-gray-500 text-sm">OR CONTINUE WITH</p>

            <div className="flex-1 h-[1px] bg-white/10"></div>
          </div>

          {/* SOCIAL LOGIN */}
          <div className="grid grid-cols-2 gap-5">
            <button className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:bg-white hover:text-black text-white py-4 rounded-2xl font-semibold transition duration-300">
              <FaGoogle />
              Google
            </button>

            <button className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:bg-white hover:text-black text-white py-4 rounded-2xl font-semibold transition duration-300">
              <FaApple />
              Apple
            </button>
          </div>

          {/* FOOTER */}
          <p className="text-center text-gray-400 mt-10 text-lg">
            Don’t have an account?{" "}
            <Link to="/register">
              <span className="text-pink-400 font-bold hover:text-pink-300 transition">
                Create Account
              </span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;