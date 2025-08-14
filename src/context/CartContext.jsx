import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart((prev) => {
      const exists = prev.find((b) => b.id === book.id);
      if (exists) return prev; // don't add duplicates
      return [...prev, book];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
