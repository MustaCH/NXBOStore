import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

function CartItem() {
  return (
    <div className="grid grid-cols-9 text-gray-300 bg-zinc-800 p-4 mb-4 rounded-xl md:w-4/5">
      <div className="col-span-6 flex items-center">
        <img
          className="w-16 h-16 rounded-full"
          src="remeron1.jpg"
          alt="remeron1"
        />
        <div className="ps-4">
          <p>Danger Shirt</p>
          <p>$30</p>
        </div>
      </div>
      <div className="col-span-3 grid grid-cols-3 gap-6">
        <div className="col-span-2 flex items-center gap-4">
          <p className="bg-zinc-500 p-2 rounded-lg">2</p>
          <p>$60</p>
        </div>
        <div className="col-span-1 flex items-center">
          <button>
            <RiDeleteBin5Line className="text-red-500 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
