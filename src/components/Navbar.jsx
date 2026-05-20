import { Link, NavLink } from "react-router-dom";
import { MyAuth } from "../context/UserContextProvider";
import { MyCart } from "../context/CartContext";

import {
  FaSearch,
  FaShoppingBag,
  FaUserAlt,
  FaSignOutAlt,
  FaSignInAlt,
  FaBars,
} from "react-icons/fa";

const Navbar = () => {
  const { user, handleLogout } = MyAuth();
  const { cart } = MyCart();

  return (
    <header className="sticky top-0 z-50 w-full px-4 md:px-8 pt-4">
      {/* MAIN NAV */}
      <nav className="max-w-7xl mx-auto bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[30px] px-6 py-4 shadow-[0_10px_50px_rgba(0,0,0,0.4)]">
        <div className="flex items-center justify-between">
          {/* ================= LOGO ================= */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* LOGO TEXT */}
            <div>
              <h1 className="text-4xl font-cursive3 tracking-wide text-white capitalize group-hover:text-pink-500 transition duration-300">
                Cosmetics
              </h1>

              <p className="text-xs text-gray-400 tracking-[3px] uppercase">
                Luxury Beauty
              </p>
            </div>
          </Link>

          {/* ================= MENU ================= */}
          <ul className="hidden lg:flex items-center gap-3 font-cursive1">
            {[
              { path: "/", label: "Home" },
              { path: "/product", label: "Products" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact" },
            ].map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-5 py-3 rounded-2xl text-sm font-semibold transition duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* ================= RIGHT ================= */}
          <div className="flex items-center gap-4">
            {/* SEARCH */}
            <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <input
                type="text"
                placeholder="Search beauty..."
                className="bg-transparent outline-none text-sm text-white placeholder:text-gray-500 w-40 lg:w-52"
              />

              <button className="text-pink-400 hover:text-pink-500 transition">
                <FaSearch />
              </button>
            </div>

            {/* CART */}
            <Link
              to="/cart"
              className="relative w-12 h-12 rounded-2xl bg-white/5 border border-white/10 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 flex items-center justify-center text-white transition duration-300"
            >
              <FaShoppingBag className="text-lg" />

              {/* COUNT */}
              <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-pink-500 text-white text-xs font-bold flex items-center justify-center shadow-lg">
                {cart.length}
              </span>
            </Link>

            {/* LOGIN / PROFILE */}
            {!user ? (
              <Link
                to="/login"
                className="hidden sm:flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition duration-300 px-6 py-3 rounded-2xl font-semibold text-white shadow-lg"
              >
                <FaSignInAlt />

                <span>Login</span>
              </Link>
            ) : (
              <div className="flex items-center gap-3">
                {/* PROFILE */}
                <Link
                  to="/my_profile"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 flex items-center justify-center text-white transition duration-300"
                >
                  <FaUserAlt />
                </Link>

                {/* LOGOUT */}
                <button
                  onClick={handleLogout}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 hover:bg-red-500 flex items-center justify-center text-white transition duration-300"
                >
                  <FaSignOutAlt />
                </button>
              </div>
            )}

            {/* MOBILE MENU */}
            <button className="lg:hidden w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
              <FaBars />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
