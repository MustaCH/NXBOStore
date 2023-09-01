import React from "react";
import {
  RiHome6Line,
  RiTShirtLine,
  RiChat1Line,
  RiShoppingCart2Line,
} from "react-icons/ri";

function NavMobile() {
  return (
    <div>
      <nav className="bg-zinc-900 lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 p-4 px-10 flex justify-between rounded-tr-xl rounded-tl-xl">
        <button className="text-orange-600">
          <RiHome6Line />
        </button>
        <button>
          <RiTShirtLine />
        </button>
        <button>
          <RiChat1Line />
        </button>
        <button>
          <RiShoppingCart2Line />
        </button>
      </nav>
    </div>
  );
}

export default NavMobile;
