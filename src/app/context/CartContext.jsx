"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    setCartItems((prev) => [...prev, item]);
  }

  function removeFromCart(index) {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  }

  return <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>{children}</CartContext.Provider>;
}

export function useCartContext() {
  return useContext(CartContext);
}
