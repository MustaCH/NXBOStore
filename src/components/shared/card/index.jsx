import React from "react";
import { Link } from "react-router-dom";

function Card({ product, btnText }) {
  if (!product) {
    return null;
  }

  const { title, price, pic1, discount, id } = product;

  let finalPrice = price;

  if (discount > 0) {
    finalPrice = price - discount;
  }

  return (
    <Link to={`/cat/:catid/${id}`} className="group flex flex-col items-center">
      <div className="bg-zinc-900 w-50 lg:w-96 mt-16 p-8 pb-3 rounded-xl flex flex-col items-center text-center text-gray-300 uppercase font-semibold">
        <div>
          <img
            className="w-40 h-40 lg:w-60 lg:h-60 object-cover rounded-full -mt-16 border border-transparent group-hover:border-4 group-hover:border-orange-600 duration-150"
            src={pic1}
            alt={title}
          />
        </div>
        <div className="pt-4">
          <p className="lg:text-2xl">{title}</p>
          <div className="flex items-center justify-center gap-3">
            <p
              className={`${discount === 0 ? "hidden" : "inline text-red-600"}`}
            >
              -{discount}%
            </p>
            <p className="lg:text-lg">U$D {finalPrice}</p>
          </div>
        </div>
      </div>
      <button className="lg:opacity-0 group-hover:opacity-100 transition duration-500 text-white font-semibold bg-orange-600 p-2 lg:hover:bg-orange-800 mt-2 rounded-xl ">
        {btnText}
      </button>
    </Link>
  );
}

export default Card;
