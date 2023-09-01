import React from "react";

function Card() {
  return (
    <div className="group">
      <div className="bg-zinc-900 w-64 lg:w-96 mt-16 p-8 pb-3 rounded-xl flex flex-col items-center ">
        <div>
          <img
            className="w-40 h-40 lg:w-60 lg:h-60 object-cover rounded-full -mt-16"
            src="remeron1.jpg"
            alt="remeron-danger"
          />
        </div>
        <div className="pt-4">
          <p className="lg:text-2xl">Danger Shirt</p>
          <p className="lg:text-lg">$30</p>
        </div>
      </div>
      <button className="lg:opacity-0 group-hover:opacity-100 transition duration-500 bg-orange-600 p-2 lg:hover:bg-orange-800 mt-2 rounded-xl ">
        See more
      </button>
    </div>
  );
}

export default Card;
