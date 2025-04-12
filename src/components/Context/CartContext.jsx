import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const addToWishlist = (product) => {
    setWishlistItems([...wishlistItems, product]);
  };

  return (
    <CartContext.Provider value={{ cartItems, wishlistItems, addToCart, addToWishlist }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
