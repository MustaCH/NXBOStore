import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../database/firebase";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

function ProductDetail() {
  const [product, setProduct] = useState("");
  const [currentIndex, setCurrentIndex] = useState(1);
  let params = useParams();

  const nextSlide = () => {
    setCurrentIndex(2);
  };

  const prevSlide = () => {
    setCurrentIndex(1);
  };

  useEffect(() => {
    getProduct(params.itemid)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => console.log(error));
  });

  return (
    <div className="lg:ps-28 flex justify-center py-12 px-1 md:px-0">
      <div className="flex flex-col md:flex-row justify-between p-6 lg:p-8 bg-zinc-900 w-full lg:w-1/2 rounded-xl">
        <div className="md:me-6 relative flex align-center">
          <img
            className={`${currentIndex === 1 ? "inline" : "hidden"}`}
            src={product.pic1}
            alt={product.title}
          />
          <img
            className={`${currentIndex === 1 ? "hidden" : "inline "} ${
              product.pic2 === "" ? "hidden" : "inline"
            }`}
            src={product.pic2}
            alt={product.title}
          />
          <div
            className={`${
              product.pic2 === ""
                ? "hidden"
                : "absolute top-[50%] -translate-x-0 translate-y-[-50%] left-1 md:left-5 text-3xl rounded-full p-2  text-orange-600 cursor-pointer"
            }`}
          >
            <RiArrowLeftSLine onClick={prevSlide} />
          </div>
          <div
            className={`${
              product.pic2 === ""
                ? "hidden"
                : "absolute top-[50%] -translate-x-0 translate-y-[-50%] right-1 md:right-5 text-3xl rounded-full p-2  text-orange-600 cursor-pointer"
            }`}
          >
            <RiArrowRightSLine onClick={nextSlide} />
          </div>
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
