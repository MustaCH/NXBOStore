import React from "react";
import { Link } from "react-router-dom";

function Card({ product }) {
  if (!product) {
    return null;
  }

  const { title, price, pic1, id } = product;
  return (
    <Link to={`/cat/:catid/${id}`} className="group">
      <div className="bg-zinc-900 w-64 lg:w-96 mt-16 p-8 pb-3 rounded-xl flex flex-col items-center ">
        <div>
          <img
            className="w-40 h-40 lg:w-60 lg:h-60 object-cover rounded-full -mt-16"
            src={pic1}
            alt={title}
          />
        </div>
        <div className="pt-4">
          <p className="lg:text-2xl">{title}</p>

          <p className="lg:text-lg">$ {price}</p>
        </div>
      </div>
      <button className="lg:opacity-0 group-hover:opacity-100 transition duration-500 bg-orange-600 p-2 lg:hover:bg-orange-800 mt-2 rounded-xl ">
        See more
      </button>
    </Link>
  );
}

export default Card;
