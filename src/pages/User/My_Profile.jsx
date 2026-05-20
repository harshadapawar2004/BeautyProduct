import React, { useEffect, useState } from "react";
import {
  FaCamera,
  FaEnvelope,
  FaLock,
  FaUser,
  FaSignOutAlt,
  FaBoxOpen,
  FaShieldAlt,
  FaGem,
  FaChevronRight,
  FaFire,
} from "react-icons/fa";

import { MyAuth } from "../../context/UserContextProvider";
import { useNavigate } from "react-router-dom";

const My_Profile = () => {
  const navigate = useNavigate();

  const { user, handleLogout } = MyAuth();

  const [image, setImage] = useState("");

  useEffect(() => {
    if (!user) return;

    const storeImage = localStorage.getItem(`profileImage_${user.id}`);

    if (storeImage) {
      setImage(storeImage);
    } else {
      setImage("");
    }
  }, [user]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] px-5 py-14 md:px-10">
      {/* BACKGROUND */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-fuchsia-500/10 blur-3xl rounded-full"></div>

      {/* GRID */}
      <div className="relative z-10 max-w-7xl mx-auto grid xl:grid-cols-[380px_1fr] gap-10">
        {/* LEFT PROFILE CARD */}
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-3xl p-8">
          {/* GLOW */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl"></div>

          {/* TOP */}
          <div className="relative z-10 flex flex-col items-center">
            {/* BADGE */}
            <div className="flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-5 py-2 rounded-full font-bold shadow-lg">
              <FaGem />
              Elite Beauty Member
            </div>

            {/* IMAGE */}
            <div className="relative mt-10">
              {/* RING */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 blur-xl opacity-70 animate-pulse"></div>

              {image ? (
                <img
                  src={image}
                  alt="profile"
                  className="relative w-64 h-64 rounded-full object-cover border-[6px] border-white/20"
                />
              ) : (
                <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-600 flex items-center justify-center border-[6px] border-white/10 shadow-[0_20px_80px_rgba(34,211,238,0.3)]">
                  <FaUser className="text-7xl text-white" />
                </div>
              )}

              {/* CAMERA */}
              <label className="absolute bottom-5 right-3 w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center cursor-pointer hover:scale-110 transition duration-300">
                <FaCamera className="text-cyan-400 text-xl" />

                <input type="file" accept="image/*" className="hidden" />
              </label>
            </div>

            {/* NAME */}
            <div className="text-center mt-8">
              <h1 className="text-4xl font-black text-white capitalize">
                {user?.name}
              </h1>

              <p className="text-cyan-300 mt-3">
                Your beauty profile is glowing ✨
              </p>
            </div>

            {/* MINI STATS */}
            <div className="grid grid-cols-2 gap-5 w-full mt-10">
              <div className="bg-black/30 border border-white/10 rounded-3xl p-5 text-center">
                <FaFire className="mx-auto text-orange-400 text-2xl mb-3" />

                <h3 className="text-3xl font-black text-white">12</h3>

                <p className="text-gray-400 text-sm mt-1">Orders</p>
              </div>

              <div className="bg-black/30 border border-white/10 rounded-3xl p-5 text-center">
                <FaShieldAlt className="mx-auto text-green-400 text-2xl mb-3" />

                <h3 className="text-3xl font-black text-white">VIP</h3>

                <p className="text-gray-400 text-sm mt-1">Member</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col gap-8">
          {/* HEADER */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-3xl rounded-[40px] p-8 md:p-10">
            <span className="uppercase tracking-[6px] text-cyan-400 text-sm font-semibold">
              Dashboard
            </span>

            <h2 className="text-5xl md:text-6xl font-black text-white mt-5 leading-tight">
              Personal
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
                Account Hub
              </span>
            </h2>

            <p className="text-gray-400 text-lg mt-6 max-w-2xl leading-relaxed">
              Manage your beauty profile, orders, and premium membership
              settings from one modern dashboard.
            </p>
          </div>

          {/* INFO GRID */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* NAME */}
            <div className="group relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[35px] p-7 hover:-translate-y-2 transition duration-500">
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                  <FaUser className="text-cyan-400 text-2xl" />
                </div>

                <p className="text-gray-400 mt-6">Full Name</p>

                <h3 className="text-3xl font-black text-white mt-2 capitalize">
                  {user?.name}
                </h3>
              </div>
            </div>

            {/* EMAIL */}
            <div className="group relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[35px] p-7 hover:-translate-y-2 transition duration-500">
              <div className="absolute top-0 right-0 w-40 h-40 bg-fuchsia-500/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-fuchsia-500/20 flex items-center justify-center">
                  <FaEnvelope className="text-fuchsia-400 text-2xl" />
                </div>

                <p className="text-gray-400 mt-6">Email Address</p>

                <h3 className="text-xl font-bold text-white mt-2 break-all">
                  {user?.email}
                </h3>
              </div>
            </div>

            {/* PASSWORD */}
            <div className="group relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[35px] p-7 hover:-translate-y-2 transition duration-500">
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-yellow-500/20 flex items-center justify-center">
                  <FaLock className="text-yellow-400 text-2xl" />
                </div>

                <p className="text-gray-400 mt-6">Password</p>

                <h3 className="text-4xl tracking-[8px] text-white mt-2">
                  {"•".repeat(user?.password?.length || 8)}
                </h3>
              </div>
            </div>

            {/* MEMBERSHIP */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 border border-white/10 backdrop-blur-2xl rounded-[35px] p-7 hover:-translate-y-2 transition duration-500">
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center">
                  <FaGem className="text-green-400 text-2xl" />
                </div>

                <p className="text-gray-300 mt-6">Membership Status</p>

                <h3 className="text-3xl font-black text-white mt-2">
                  Premium User
                </h3>

                <p className="text-cyan-300 mt-3">Exclusive offers unlocked</p>
              </div>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* ORDER HISTORY */}
            <button
              onClick={() => navigate("/orderHistory")}
              className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[35px] p-7 text-left hover:scale-[1.02] transition duration-300 shadow-[0_10px_40px_rgba(34,211,238,0.3)]"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                    <FaBoxOpen className="text-white text-2xl" />
                  </div>

                  <h3 className="text-3xl font-black text-white mt-6">
                    Order History
                  </h3>

                  <p className="text-cyan-100 mt-3">
                    View all your previous purchases
                  </p>
                </div>

                <FaChevronRight className="text-white text-2xl group-hover:translate-x-1 transition duration-300" />
              </div>
            </button>

            {/* LOGOUT */}
            <button
              onClick={handleLogout}
              className="group relative overflow-hidden bg-gradient-to-r from-red-500 to-orange-500 rounded-[35px] p-7 text-left hover:scale-[1.02] transition duration-300 shadow-[0_10px_40px_rgba(239,68,68,0.3)]"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                    <FaSignOutAlt className="text-white text-2xl" />
                  </div>

                  <h3 className="text-3xl font-black text-white mt-6">
                    Logout
                  </h3>

                  <p className="text-orange-100 mt-3">
                    Securely sign out from account
                  </p>
                </div>

                <FaChevronRight className="text-white text-2xl group-hover:translate-x-1 transition duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default My_Profile;
