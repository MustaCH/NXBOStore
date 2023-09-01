import React, { useEffect, useState } from "react";
import {
  RiHome6Line,
  RiTShirtLine,
  RiChat1Line,
  RiShoppingCart2Line,
  RiQuestionnaireLine,
} from "react-icons/ri";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [activePage, setActivePage] = useState("");
  const location = useLocation();

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  return (
    <nav className="hidden bg-zinc-900 fixed left-0 top-0 w-28 h-full lg:flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl">
      <div>
        <ul className="pl-4">
          <NavLink to={"/"}>
            <div className="my-5">
              <svg
                className="h-20 w-20 fill-orange-600"
                viewBox="0 0 60 94"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.805 7.808C4.805 6.18667 5.29567 4.928 6.277 4.032C7.301 3.09333 8.709 2.624 10.501 2.624L35.333 40.384L35.781 40L33.925 36.928V2.624C35.8877 2.624 37.3597 3.05066 38.341 3.904C39.365 4.75733 39.877 5.99466 39.877 7.616V43.84C39.877 45.2053 39.3863 46.336 38.405 47.232C37.4663 48.128 36.2503 48.576 34.757 48.576L9.349 9.984L8.901 10.368L10.757 13.44V43.584C10.757 45.2053 10.245 46.4427 9.221 47.296C8.23967 48.1493 6.76767 48.576 4.805 48.576V7.808ZM42.5705 48.576C41.2478 48.576 40.1385 48.128 39.2425 47.232L55.1785 24.896L40.0745 3.712C40.9278 2.98666 41.9732 2.624 43.2105 2.624C44.1065 2.624 44.9172 2.79466 45.6425 3.136C46.4105 3.47733 47.0078 3.94667 47.4345 4.544L58.1865 19.968L56.7145 21.952L57.1625 22.272L69.5785 4.544C70.0052 3.94667 70.5812 3.47733 71.3065 3.136C72.0745 2.79466 72.9065 2.624 73.8025 2.624C74.3572 2.624 74.9118 2.73066 75.4665 2.944C76.0638 3.11466 76.5545 3.37066 76.9385 3.712L61.8345 24.896L77.7705 47.232C76.8745 48.128 75.7652 48.576 74.4425 48.576C73.6745 48.576 72.9492 48.384 72.2665 48C71.6265 47.6587 71.0718 47.168 70.6025 46.528L58.5065 29.376L46.4105 46.528C45.9412 47.168 45.3652 47.6587 44.6825 48C44.0425 48.384 43.3385 48.576 42.5705 48.576ZM8.78325 93C7.92992 93 7.20458 92.7227 6.60725 92.168C6.00992 91.6133 5.71125 90.952 5.71125 90.184V51.016C5.71125 50.2053 6.00992 49.544 6.60725 49.032C7.20458 48.4773 7.92992 48.2 8.78325 48.2H26.5753C30.2873 48.2 33.2313 49.3093 35.4073 51.528C37.6259 53.7467 38.7353 56.7333 38.7353 60.488C38.7353 62.4933 38.2019 64.3707 37.1353 66.12C36.0686 67.8693 34.6819 69.1707 32.9753 70.024V70.152C35.4073 70.8773 37.2846 72.136 38.6073 73.928C39.9299 75.6773 40.5913 77.8107 40.5913 80.328C40.5913 82.8027 40.0579 85 38.9913 86.92C37.9673 88.84 36.5166 90.3333 34.6393 91.4C32.7619 92.4667 30.6073 93 28.1753 93H8.78325ZM26.4473 67.976C28.1966 67.976 29.6899 67.272 30.9273 65.864C32.2073 64.4133 32.8473 62.664 32.8473 60.616C32.8473 58.3547 32.2713 56.584 31.1193 55.304C30.0099 54.024 28.4526 53.384 26.4473 53.384H11.6633V67.976H26.4473ZM27.7273 87.816C29.9033 87.816 31.6099 87.176 32.8473 85.896C34.0846 84.5733 34.7033 82.7387 34.7033 80.392C34.7033 78.1307 34.0846 76.36 32.8473 75.08C31.6526 73.8 29.9459 73.16 27.7273 73.16H11.6633V87.816H27.7273ZM58.3932 93.576C54.8519 93.576 51.6732 92.8933 48.8573 91.528C46.0839 90.12 43.9079 88.2 42.3292 85.768C40.7506 83.2933 39.9612 80.5627 39.9612 77.576V63.496C39.9612 60.5093 40.7506 57.8213 42.3292 55.432C43.9079 53 46.0839 51.1013 48.8573 49.736C51.6732 48.328 54.8519 47.624 58.3932 47.624C61.9773 47.624 65.1559 48.328 67.9293 49.736C70.7453 51.1013 72.9426 53 74.5213 55.432C76.0999 57.8213 76.8893 60.5093 76.8893 63.496V77.576C76.8893 80.5627 76.0999 83.2933 74.5213 85.768C72.9426 88.2 70.7453 90.12 67.9293 91.528C65.1133 92.8933 61.9346 93.576 58.3932 93.576ZM58.3932 88.328C62.3613 88.328 65.4546 87.3467 67.6733 85.384C69.8919 83.4213 71.0013 80.7973 71.0013 77.512V63.624C71.0013 60.3387 69.8919 57.736 67.6733 55.816C65.4546 53.8533 62.3613 52.872 58.3932 52.872C54.4679 52.872 51.3959 53.8533 49.1772 55.816C46.9586 57.736 45.8492 60.3387 45.8492 63.624V77.512C45.8492 80.7973 46.9586 83.4213 49.1772 85.384C51.3959 87.3467 54.4679 88.328 58.3932 88.328Z" />
              </svg>
            </div>
          </NavLink>
          <li
            className={` p-4 rounded-tl-xl rounded-bl-xl ${
              activePage === "/" ? "bg-zinc-800" : "bg-zinc-900 "
            }`}
          >
            <NavLink
              to="/"
              className={` p-4 flex justify-center rounded-xl ${
                activePage === "/"
                  ? "bg-orange-600 text-white"
                  : "bg-zinc-900 text-orange-600 hover:bg-orange-600 hover:text-white"
              }`}
            >
              <RiHome6Line className="text-2xl" />
            </NavLink>
          </li>
          <li
            className={` p-4 rounded-tl-xl rounded-bl-xl ${
              activePage === "/product-list" ? "bg-zinc-800" : "bg-zinc-900 "
            }`}
          >
            <NavLink
              to="./product-list"
              className={` p-4 flex justify-center rounded-xl ${
                activePage === "/product-list"
                  ? "bg-orange-600 text-white"
                  : "bg-zinc-900 text-orange-600 hover:bg-orange-600 hover:text-white"
              }`}
            >
              <RiTShirtLine className="text-2xl" />
            </NavLink>
          </li>
          <li
            className={` p-4 rounded-tl-xl rounded-bl-xl ${
              activePage === "/chat" ? "bg-zinc-800" : "bg-zinc-900 "
            }`}
          >
            <NavLink
              to="./chat"
              className={` p-4 flex justify-center rounded-xl ${
                activePage === "/chat"
                  ? "bg-orange-600 text-white"
                  : "bg-zinc-900 text-orange-600 hover:bg-orange-600 hover:text-white"
              }`}
            >
              <RiChat1Line className="text-2xl" />
            </NavLink>
          </li>
          <li
            className={` p-4 rounded-tl-xl rounded-bl-xl ${
              activePage === "/cart" ? "bg-zinc-800" : "bg-zinc-900 "
            }`}
          >
            <NavLink
              to="./cart"
              className={` p-4 flex justify-center rounded-xl ${
                activePage === "/cart"
                  ? "bg-orange-600 text-white"
                  : "bg-zinc-900 text-orange-600 hover:bg-orange-600 hover:text-white"
              }`}
            >
              <RiShoppingCart2Line className="text-2xl" />
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-4">
          <li
            className={` p-4 rounded-tl-xl rounded-bl-xl ${
              activePage === "/FAQS" ? "bg-zinc-800" : "bg-zinc-900 "
            }`}
          >
            <NavLink
              to="./FAQS"
              className={` p-4 flex justify-center rounded-xl ${
                activePage === "/FAQS"
                  ? "bg-orange-600 text-white"
                  : "bg-zinc-900 text-orange-600 hover:bg-orange-600 hover:text-white"
              }`}
            >
              <RiQuestionnaireLine className="text-2xl" />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
