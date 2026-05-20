import { useParams } from "react-router-dom";
import { MyProduct } from "../../context/ProductContext.jsx";
import { MyCart } from "../../context/CartContext.jsx";

import {
  FaMinus,
  FaPlus,
  FaStar,
  FaShoppingBag,
  FaBolt,
  FaHeart,
  FaTruck,
  FaShieldAlt,
  FaLeaf,
  FaFireAlt,
  FaCheckCircle,
} from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();

  const { data } = MyProduct();

  const { handleCart, incQty, decQty, cart } = MyCart();

  // FIND PRODUCT
  const products = data.find((item) => item._id === id);

  // FIND CART ITEM
  const cartItem = cart.find((item) => item.productId._id === id);

  if (!products) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#050816] text-white text-4xl font-black">
        Loading...
      </div>
    );
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] py-10 px-5 md:px-10">
      
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* GLOW */}
      <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-pink-500/20 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-cyan-500/20 rounded-full blur-[120px]"></div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
        
        {/* LEFT SIDE */}
        <div className="relative">
          
          {/* GLASS CARD */}
          <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
            
            {/* BADGE */}
            <div className="absolute top-6 left-6 bg-gradient-to-r from-pink-500 to-orange-400 text-white px-5 py-2 rounded-full font-bold flex items-center gap-2 shadow-lg">
              <FaFireAlt />
              Trending Product
            </div>

            {/* WISHLIST */}
            <button className="absolute top-6 right-6 w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-pink-500 transition duration-300">
              <FaHeart className="text-xl" />
            </button>

            {/* IMAGE BG */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-cyan-500/10"></div>

            {/* PRODUCT IMAGE */}
            <div className="relative flex items-center justify-center min-h-[650px]">
              
              {/* RING */}
              <div className="absolute w-[450px] h-[450px] border border-white/10 rounded-full"></div>

              <div className="absolute w-[350px] h-[350px] border border-pink-500/10 rounded-full"></div>

              <img
                src={products.imageUrl}
                alt={products.name}
                className="relative z-10 w-full max-w-[480px] object-contain hover:scale-110 transition duration-700 drop-shadow-[0_30px_80px_rgba(255,255,255,0.15)]"
              />
            </div>

            {/* FLOATING MINI CARDS */}
            <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl px-6 py-4">
              <p className="text-gray-400 text-sm">Skin Type</p>

              <h3 className="text-white font-bold text-xl">
                All Skin
              </h3>
            </div>

            <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl px-6 py-4">
              <p className="text-gray-400 text-sm">Rating</p>

              <h3 className="text-yellow-400 font-bold text-xl flex items-center gap-2">
                4.9
                <FaStar />
              </h3>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-8">
          
          {/* CATEGORY */}
          <div>
            <span className="uppercase tracking-[6px] text-cyan-300 font-semibold">
              {products.category}
            </span>

            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mt-5">
              {products.name}
            </h1>

            {/* LINE */}
            <div className="w-36 h-1 bg-gradient-to-r from-pink-500 to-cyan-400 rounded-full mt-8"></div>
          </div>

          {/* REVIEW */}
          <div className="flex flex-wrap items-center gap-5">
            
            <div className="flex items-center gap-1 text-yellow-400 text-xl">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="text-gray-300 text-lg">
              4.9 Rating • 1.8k+ Happy Customers
            </p>
          </div>

          {/* PRICE */}
          <div className="flex flex-wrap items-center gap-6">
            <h2 className="text-6xl font-black text-white">
              ₹{products.price}
            </h2>

            <span className="bg-green-500/20 border border-green-500/20 text-green-400 px-5 py-3 rounded-2xl font-bold">
              20% OFF
            </span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            Elevate your skincare routine with luxurious beauty essentials
            crafted for radiant and healthy skin. Infused with premium
            ingredients that hydrate, nourish, and restore your natural glow.
          </p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-3 gap-5">
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:-translate-y-2 transition duration-300">
              <FaTruck className="text-4xl text-pink-400 mb-5" />

              <h3 className="text-white font-bold text-lg">
                Free Delivery
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                Fast shipping on every order
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:-translate-y-2 transition duration-300">
              <FaShieldAlt className="text-4xl text-cyan-400 mb-5" />

              <h3 className="text-white font-bold text-lg">
                Secure Payment
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                Safe and trusted checkout
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:-translate-y-2 transition duration-300">
              <FaLeaf className="text-4xl text-green-400 mb-5" />

              <h3 className="text-white font-bold text-lg">
                Organic Formula
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                Gentle care for your skin
              </p>
            </div>
          </div>

          {/* STOCK */}
          <div className="flex items-center gap-4">
            <FaCheckCircle
              className={`text-2xl ${
                products.stock > 0
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            />

            <h3 className="text-2xl font-bold text-white">
              {products.stock > 0
                ? `${products.stock} Products Available`
                : "Out Of Stock"}
            </h3>
          </div>

          {/* BUTTONS */}
          <div className="pt-5">
            {!cartItem ? (
              <div className="flex flex-wrap gap-5">
                
                {/* ADD TO CART */}
                <button
                  onClick={() => handleCart(products)}
                  className="group relative overflow-hidden bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 text-white px-10 py-5 rounded-3xl text-lg font-bold shadow-[0_10px_40px_rgba(236,72,153,0.4)] transition duration-300"
                >
                  <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition duration-700"></span>

                  <span className="relative flex items-center gap-3">
                    <FaShoppingBag />
                    Add To Cart
                  </span>
                </button>

                {/* BUY NOW */}
                <button className="group border border-white/10 bg-white/5 hover:bg-white hover:text-black text-white px-10 py-5 rounded-3xl text-lg font-bold transition duration-300">
                  <span className="flex items-center gap-3">
                    <FaBolt />
                    Buy Now
                  </span>
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between w-[220px] bg-white/5 border border-white/10 rounded-3xl px-6 py-5">
                
                <button
                  onClick={() => decQty(products._id)}
                  className="w-12 h-12 rounded-2xl bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white flex items-center justify-center transition duration-300"
                >
                  <FaMinus />
                </button>

                <p className="text-3xl font-black text-white">
                  {cartItem.quantity}
                </p>

                <button
                  onClick={() => incQty(products._id)}
                  className="w-12 h-12 rounded-2xl bg-green-500/10 hover:bg-green-500 text-green-400 hover:text-white flex items-center justify-center transition duration-300"
                >
                  <FaPlus />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;