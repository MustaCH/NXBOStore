import React from "react";
import { Header } from "../../components/shared";
import { Link } from "react-router-dom";

function ProductList() {
  return (
    <div className="lg:pl-28">
      <Header />
      <ul className="hidden lg:flex lg:justify-between lg:mx-80 border-b-2 py-4 border-orange-600 uppercase text-orange-600 font-semibold">
        <li>
          <Link
            to={"/cat/shirts"}
            className="transition-all hover:text-gray-300 duration-300"
          >
            Shirts
          </Link>
        </li>
        <li>
          <Link
            to={"/cat/hoodies"}
            className="transition-all hover:text-gray-300 duration-300"
          >
            Hoodies
          </Link>
        </li>
        <li>
          <Link
            to={"/cat/coats"}
            className="transition-all hover:text-gray-300 duration-300"
          >
            Coats
          </Link>
        </li>
        <li>
          <Link
            to={"/cat/pants"}
            className="transition-all hover:text-gray-300 duration-300"
          >
            Pants
          </Link>
        </li>
        <li>
          <Link
            to={"/cat/shorts"}
            className="transition-all hover:text-gray-300 duration-300"
          >
            Shorts
          </Link>
        </li>
        <li>
          <Link
            to={"/cat/accesories"}
            className="transition-all hover:text-gray-300 duration-300"
          >
            Accesories
          </Link>
        </li>
      </ul>

      <div className="mb-24 lg:my-24 flex flex-col lg:grid lg:grid-cols-2 items-center uppercase text-gray-300 font-semibold text-4xl lg:text-8xl ">
        <Link
          to={"/cat/shirts"}
          className="my-4 lg:my-0 relative transition-all drop-shadow-xl hover:text-orange-600 group"
        >
          <p className="absolute z-40 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] group-hover:scale-105 duration-300">
            shirts
          </p>
          <img
            src="img/cat-banner/shirt-cat.jpg"
            alt="categorie-header"
            className="brightness-50"
          />
        </Link>
        <Link
          to={"/cat/hoodies"}
          className="my-4 lg:my-0 relative transition-all drop-shadow-xl hover:text-orange-600 group"
        >
          <p className="absolute z-40 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] group-hover:scale-105 duration-300">
            hoodies
          </p>
          <img
            src="img/cat-banner/hoodie-cat.jpg"
            alt="categorie-header"
            className="brightness-50 "
          />
        </Link>
        <Link
          to={"/cat/coats"}
          className="my-4 lg:my-0 relative transition-all drop-shadow-xl hover:text-orange-600 group"
        >
          <p className="absolute z-40 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] group-hover:scale-105 duration-300">
            coats
          </p>
          <img
            src="img/cat-banner/coat-cat.jpg"
            alt="categorie-header"
            className="brightness-50"
          />
        </Link>
        <Link
          to={"/cat/pants"}
          className="my-4 lg:my-0 relative transition-all drop-shadow-xl hover:text-orange-600 group"
        >
          <p className="absolute z-40 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] group-hover:scale-105 duration-300">
            pants
          </p>
          <img
            src="img/cat-banner/pant-cat.jpg"
            alt="categorie-header"
            className="brightness-50"
          />
        </Link>
        <Link
          to={"/cat/shorts"}
          className="my-4 lg:my-0 relative transition-all drop-shadow-xl hover:text-orange-600 group"
        >
          <p className="absolute z-40 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] group-hover:scale-105 duration-300">
            shorts
          </p>
          <img
            src="img/cat-banner/short-cat.jpg"
            alt="categorie-header"
            className="brightness-50"
          />
        </Link>
        <Link
          to={"/cat/accesories"}
          className="my-4 lg:my-0 relative transition-all drop-shadow-xl hover:text-orange-600 group "
        >
          <p className="absolute z-10 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] group-hover:scale-105 duration-300">
            accesories
          </p>
          <img
            src="img/cat-banner/accesorie-cat.jpg"
            alt="categorie-header"
            className="brightness-50"
          />
        </Link>
      </div>
    </div>
  );
}

export default ProductList;
