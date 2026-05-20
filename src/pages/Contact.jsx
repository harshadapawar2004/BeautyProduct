import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
  FaGithub,
  FaArrowRight,
  FaHeadset,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="relative overflow-hidden bg-[#07070B] py-24 px-5 md:px-10 lg:px-20">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-[-180px] left-[-180px] w-[450px] h-[450px] bg-pink-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* TOP HEADER */}
        <div className="text-center mb-20">
          <span className="uppercase tracking-[6px] text-pink-400 text-sm font-semibold">
            Contact BloomSkin
          </span>

          <h1 className="text-5xl md:text-7xl font-black text-white mt-6 leading-tight">
            Let’s Create
            <br />

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-300">
              Beauty Together
            </span>
          </h1>

          <p className="text-gray-500 text-lg max-w-3xl mx-auto mt-8 leading-relaxed">
            Have questions about skincare, beauty products, or orders? Our
            beauty experts are always ready to help you glow with confidence.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
          
          {/* LEFT SIDE */}
          <div className="relative overflow-hidden rounded-[45px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 md:p-12">
            
            {/* GLOW */}
            <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-pink-500/10 blur-3xl rounded-full"></div>

            {/* HEADING */}
            <div className="relative z-10">
              <div className="flex items-center gap-4">
                
                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <FaHeadset className="text-white text-2xl" />
                </div>

                <div>
                  <p className="uppercase tracking-[4px] text-pink-400 text-sm">
                    Customer Support
                  </p>

                  <h2 className="text-4xl font-black text-white mt-2">
                    Get In Touch
                  </h2>
                </div>
              </div>

              <p className="text-gray-500 mt-8 leading-relaxed text-lg max-w-2xl">
                Fill out the form and our support team will contact you shortly.
                We’re here to help with beauty consultations, product guidance,
                and customer support.
              </p>
            </div>

            {/* FORM */}
            <form className="relative z-10 mt-12 flex flex-col gap-7">
              
              {/* NAME + EMAIL */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-gray-400 text-sm mb-3 block">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-black/30 border border-white/10 rounded-3xl px-6 py-5 text-white placeholder:text-gray-500 outline-none focus:border-pink-500 transition"
                  />
                </div>

                <div>
                  <label className="text-gray-400 text-sm mb-3 block">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-black/30 border border-white/10 rounded-3xl px-6 py-5 text-white placeholder:text-gray-500 outline-none focus:border-pink-500 transition"
                  />
                </div>
              </div>

              {/* SUBJECT */}
              <div>
                <label className="text-gray-400 text-sm mb-3 block">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Beauty Consultation"
                  className="w-full bg-black/30 border border-white/10 rounded-3xl px-6 py-5 text-white placeholder:text-gray-500 outline-none focus:border-pink-500 transition"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-gray-400 text-sm mb-3 block">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full bg-black/30 border border-white/10 rounded-[30px] px-6 py-5 text-white placeholder:text-gray-500 outline-none resize-none focus:border-pink-500 transition"
                ></textarea>
              </div>

              {/* BUTTON */}
              <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-pink-500 to-purple-600 py-5 text-lg font-bold text-white shadow-[0_10px_40px_rgba(236,72,153,0.35)] hover:scale-[1.02] transition duration-300">
                
                <span className="relative z-10 flex items-center justify-center gap-4">
                  Send Your Message

                  <FaPaperPlane className="group-hover:translate-x-2 transition duration-300" />
                </span>
              </button>
            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-8">
            
            {/* CONTACT CARD */}
            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-pink-500/10 to-purple-500/10 p-8">
              
              <div className="absolute bottom-[-50px] right-[-50px] w-40 h-40 rounded-full bg-pink-500/20 blur-3xl"></div>

              <span className="uppercase tracking-[5px] text-pink-400 text-sm">
                Contact Info
              </span>

              <h2 className="text-4xl font-black text-white mt-5 leading-tight">
                We’d Love To
                <br />
                Hear From You
              </h2>

              <div className="flex flex-col gap-6 mt-10">
                
                {/* PHONE */}
                <div className="flex items-center gap-5 bg-black/20 border border-white/10 rounded-3xl p-5 backdrop-blur-xl">
                  
                  <div className="w-16 h-16 rounded-2xl bg-pink-500/20 flex items-center justify-center">
                    <FaPhoneAlt className="text-pink-400 text-2xl" />
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">
                      Phone Number
                    </p>

                    <h3 className="text-white text-xl font-bold mt-1">
                      +91 7410521933
                    </h3>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-center gap-5 bg-black/20 border border-white/10 rounded-3xl p-5 backdrop-blur-xl">
                  
                  <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center">
                    <FaEnvelope className="text-purple-400 text-2xl" />
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">
                      Email Address
                    </p>

                    <h3 className="text-white text-xl font-bold mt-1">
                      pawarhd2004@gmail.com
                    </h3>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="flex items-center gap-5 bg-black/20 border border-white/10 rounded-3xl p-5 backdrop-blur-xl">
                  
                  <div className="w-16 h-16 rounded-2xl bg-yellow-500/20 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-yellow-400 text-2xl" />
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">
                      Location
                    </p>

                    <h3 className="text-white text-xl font-bold mt-1">
                      Maharashtra, India
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* SOCIAL CARD */}
            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="uppercase tracking-[5px] text-pink-400 text-sm">
                    Social Media
                  </span>

                  <h2 className="text-3xl font-black text-white mt-4">
                    Follow Us
                  </h2>
                </div>

                <button className="w-16 h-16 rounded-3xl bg-gradient-to-br from-pink-500 to-purple-600 text-white flex items-center justify-center shadow-lg">
                  <FaArrowRight />
                </button>
              </div>

              {/* SOCIAL ICONS */}
              <div className="grid grid-cols-2 gap-5 mt-10">
                
                <button className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-black/20 px-6 py-5 hover:border-pink-500 transition duration-300">
                  
                  <div className="w-14 h-14 rounded-2xl bg-pink-500/20 flex items-center justify-center">
                    <FaInstagram className="text-pink-400 text-2xl" />
                  </div>

                  <div className="text-left">
                    <h3 className="text-white font-bold">
                      Instagram
                    </h3>

                    <p className="text-gray-500 text-sm">
                      @cosmetics
                    </p>
                  </div>
                </button>

                <button className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-black/20 px-6 py-5 hover:border-white transition duration-300">
                  
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                    <FaGithub className="text-white text-2xl" />
                  </div>

                  <div className="text-left">
                    <h3 className="text-white font-bold">
                      GitHub
                    </h3>

                    <p className="text-gray-500 text-sm">
                      Cosmetic UI
                    </p>
                  </div>
                </button>

                <button className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-black/20 px-6 py-5 hover:border-blue-500 transition duration-300 col-span-2">
                  
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                    <FaLinkedinIn className="text-blue-400 text-2xl" />
                  </div>

                  <div className="text-left">
                    <h3 className="text-white font-bold">
                      LinkedIn
                    </h3>

                    <p className="text-gray-500 text-sm">
                      Connect With Our Team
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;