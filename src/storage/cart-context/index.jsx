import React, { createContext, useContext, useState } from "react";
export const useCartContext = () => useContext(CartContext);
export const CartContext = createContext([]);

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addProduct = (item) => {
    let newCart = [...cart];
    newCart.push(item);
    setCart(newCart);
  };

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.count * act.price, 0);
  };

  const totalProducts = () =>
    cart.reduce(
      (acumulador, productoAcual) => acumulador + productoAcual.count,
      0
    );

  const clearCart = () => setCart([]);

  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  const removeProd = (title) =>
    setCart(cart.filter((product) => product.title !== title));

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProd,
        addProduct,
        totalPrice,
        totalProducts,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
