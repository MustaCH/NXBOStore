import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../database/firebase";

function ProductDetail() {
  const [product, setProduct] = useState("");
  let params = useParams();

  useEffect(() => {
    getProduct(params.itemid)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => console.log(error));
  });

  return (
    <div className="lg:ps-28 flex justify-center py-12 px-1 md:px-0">
      <div className="flex flex-col md:flex-row justify-between p-6 lg:p-12 bg-zinc-900 w-full lg:w-1/2 rounded-xl">
        <div>
          <img src="img/banner_1.jpg" alt={product.title} />
          <img src={product.pic2} alt={product.title} />
        </div>
        <div className="md:w-1/2">
          <div className="flex flex-col gap-6 uppercase text-gray-300">
            <h2 className="text-4xl lg:text-5xl font-semibold">
              {product.title}
            </h2>
            <p className="text-3xl">
              $ <span className="text-orange-600">{product.price}</span>
            </p>
            <div className="flex justify-between items-center mb-6">
              <p>
                Size: <span className="text-orange-600">{product.size}</span>
              </p>
              <button className="bg-zinc-800 p-1 lg:hover:bg-orange-800 rounded-xl uppercase text-gray-200 text-xs md:text-sm w-2/5 shadow-xl">
                See size chart
              </button>
            </div>
          </div>
          <div className="flex justify-between uppercase text-gray-300 py-4">
            <p
              className={`${product.size === "one size" ? `hidden` : `inline`}`}
            >
              Choose size:
            </p>
            <p>quantity:</p>
          </div>
          <div className="flex flex-col">
            <button className="bg-orange-600 p-2 lg:hover:bg-orange-800 mt-2 rounded-xl uppercase text-gray-200 font-semibold shadow-xl">
              Buy
            </button>
            <button className="bg-zinc-500 p-2 lg:hover:bg-zinc-800 mt-2 rounded-xl uppercase text-gray-200 font-semibold shadow-xl">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
