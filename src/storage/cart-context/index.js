import React, { createContext, useContext, useState } from "react";

export const useCartContext = () => useContext(CartContext);

export const CartContext = createContext([]);

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, product]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteProduct = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
