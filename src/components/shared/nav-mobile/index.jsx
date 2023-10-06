import React, { useContext, useEffect, useState } from "react";
import {
  RiHome6Line,
  RiTShirtLine,
  RiChat1Line,
  RiShoppingCart2Line,
} from "react-icons/ri";
import { NavLink, useLocation } from "react-router-dom";
import { CartContext } from "../../../storage/cart-context";

function NavMobile() {
  const { cart } = useContext(CartContext);
  const [activePage, setActivePage] = useState("");
  const location = useLocation();

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  return (
    <div className="relative z-50">
      <nav className="bg-zinc-900 lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 p-4 px-10 flex justify-between rounded-tr-xl rounded-tl-xl">
        <NavLink to={"/"}>
          <button
            className={activePage === "/" ? `text-orange-600` : `text-gray-400`}
          >
            <RiHome6Line />
          </button>
        </NavLink>
        <NavLink to={"/product-list"}>
          <button
            className={
              activePage === "/product-list"
                ? `text-orange-600`
                : `text-gray-400`
            }
          >
            <RiTShirtLine />
          </button>
        </NavLink>
        <NavLink to={"/chat"}>
          <button
            className={
              activePage === "/chat" ? `text-orange-600` : `text-gray-400`
            }
          >
            <RiChat1Line />
          </button>
        </NavLink>
        <NavLink to={"/cart"}>
          <button
            className={
              activePage === "/cart" ? `text-orange-600` : `text-gray-400`
            }
          >
            <RiShoppingCart2Line />
            <span className="absolute top-5 right-7 text-lg text-orange-600 text-center rounded-full">
              {cart.length}
            </span>
          </button>
        </NavLink>
      </nav>
    </div>
  );
}

export default NavMobile;
