import { createContext, useContext, useEffect } from "react";

import useCart from "../hooks/useCart";
import { MyAuth } from "./UserContextProvider";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { user } = MyAuth();

  const { cart, setCart, fetchCart, addToCart, removeCart } =
    useCart();

  const handleCart = async (product) => {
    await addToCart(product);
  };



  useEffect(() => {
    if (user) {
      fetchCart();
    }
  }, [user]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        fetchCart,
        handleCart,
        removeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const MyCart = () => useContext(CartContext);
