import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import CartItem from "../../components/shared/cart-item";

function Cart() {
  return (
    <div className="lg:pl-28 lg:flex lg:justify-center fixed lg:static bg-zinc-900 lg:bg-zinc-800 w-full h-full z-50">
      <div className="bg-zinc-900 lg:w-6/12 lg:mt-12 rounded-xl">
        <div className="relative flex justify-end">
          <RiArrowLeftSLine className="lg:hidden absolute left-4 top-4 p-2 box-content text-gray-300 bg-zinc-800 rounded-full text-xl" />
          <h1 className="text-gray-300 font-bold text-3xl p-4">Cart</h1>
        </div>
        <div className="flex flex-col items-center py-6">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="p-4 w-full bottom-0 left-0 h-full lg:h-28">
          <div className="flex justify-between text-gray-300/50 py-1">
            <p>Discount applied</p>
            <p>-$0</p>
          </div>
          <div className="flex justify-between text-gray-300 py-1">
            <p className="font-bold text-2xl">Total</p>
            <p className="font-bold text-2xl">$240</p>
          </div>
          <div className="flex flex-col justify-evenly gap-2 pt-6 lg:pt-12">
            <button className="bg-orange-500 text-zinc-900 font-semibold p-3 rounded-xl">
              Buy
            </button>
            <button className="bg-zinc-900  text-gray-300 font-semibold p-3 rounded-xl">
              Clean Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
