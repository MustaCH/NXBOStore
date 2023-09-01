import React, { useEffect, useState } from "react";
import {
  RiHome6Line,
  RiTShirtLine,
  RiChat1Line,
  RiShoppingCart2Line,
} from "react-icons/ri";
import { NavLink, useLocation } from "react-router-dom";

function NavMobile() {
  const [activePage, setActivePage] = useState("");
  const location = useLocation();

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  return (
    <div>
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
          </button>
        </NavLink>
      </nav>
    </div>
  );
}

export default NavMobile;
