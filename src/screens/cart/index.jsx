import React, { useContext } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import CartItem from "../../components/shared/cart-item";
import { Link } from "react-router-dom";
import { CartContext } from "../../storage/cart-context";

function Cart() {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, product) => {
    const productPrice = (product.price - product.discount) * product.quantity;
    return total + productPrice;
  }, 0);

  return (
    <div className="lg:pl-28 lg:flex lg:justify-center fixed lg:static bg-zinc-900 lg:bg-zinc-800 w-full h-full z-50">
      <div className="bg-zinc-900 lg:w-6/12 lg:mt-12 rounded-xl">
        <Link to={"/"} className="relative flex justify-end">
          <RiArrowLeftSLine className="lg:hidden absolute left-4 top-4 p-2 box-content text-gray-300 bg-zinc-800 rounded-full text-xl" />
          <h1 className="text-gray-300 font-bold text-3xl p-4">Cart</h1>
        </Link>
        <div className="flex flex-col items-center py-6">
          {cart.map((cartItem) => (
            <CartItem key={cartItem.id} product={cartItem} />
          ))}
        </div>
        <div className="p-4 w-full bottom-0 left-0 h-full lg:h-28">
          <div className="flex justify-between text-gray-300/50 py-1">
            <p>Discount applied</p>
            <p>-$0</p>
          </div>
          <div className="flex justify-between text-gray-300 py-1">
            <p className="font-bold text-2xl">Total</p>
            <p className="font-bold text-2xl">U$D {totalPrice}</p>
          </div>
          <div className="flex flex-col justify-evenly gap-2 pt-6 lg:pt-12">
            <button className="bg-orange-500 text-zinc-900 font-semibold p-3 rounded-xl">
              Buy
            </button>
            <button className="bg-zinc-900  text-gray-300 font-semibold p-3 rounded-xl">
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
