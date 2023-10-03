import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategory } from "../../database/firebase";
import { RiCloseFill, RiEmotionUnhappyLine } from "react-icons/ri";
import { Card, Header } from "../../components/shared";

function ProductCat() {
  const { catid } = useParams();
  const [category, setCategory] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      const productsData = await getCategory(catid);
      setCategory(productsData);
    }
    fetchProducts();
  }, [catid]);

  useEffect(() => {
    if (filter === "latestReleases") {
      const currentDate = new Date().getTime();
      const latestReleases = category.filter((product) => {
        const productDate = new Date(product.date).getTime();
        return productDate >= currentDate;
      });
      setFilteredCategory(latestReleases);
    } else if (filter === "lastAvailable") {
      const lastAvailable = category.filter((product) => product.stock <= 10);
      setFilteredCategory(lastAvailable);
    } else if (filter === "discount") {
      const discountedProducts = category.filter(
        (product) => product.discount > 0
      );
      setFilteredCategory(discountedProducts);
    } else {
      setFilteredCategory(category);
    }
  }, [category, filter]);

  const handleFilterClick = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const clearFilter = () => {
    setFilter("");
  };

  return (
    <div className="lg:ps-28 lg:pb-14">
      <Header />
      <h2 className="font-bold text-white text-5xl lg:text-6xl uppercase text-center border-b-2 border-b-orange-600 py-6 lg:pb-6">
        {catid}
      </h2>
      <div className="flex flex-col md:flex-row justify-evenly my-12 text-white items-center">
        <p className="font-bold text-lg pb-5 lg:pb-0">Filter by:</p>
        <div className="flex gap-4 lg:gap-56 mx-5 items-center">
          <button
            className={`uppercase text-sm  p-1 lg:p-2  lg:hover:bg-orange-600 active:bg-orange-600 active:border-2 active:border-orange-300  rounded-xl shadow-lg ${
              filter === "latestReleases"
                ? "bg-orange-600 border-2 border-orange-300"
                : "bg-orange-800"
            }`}
            onClick={() => handleFilterClick("latestReleases")}
          >
            latest releases
          </button>
          <button
            className={`uppercase text-sm  p-1 lg:p-2  lg:hover:bg-orange-600 rounded-xl shadow-lg ${
              filter === "lastAvailable"
                ? "bg-orange-600 border-2 border-orange-300 font-semibold"
                : "bg-orange-800"
            }`}
            onClick={() => handleFilterClick("lastAvailable")}
          >
            last available
          </button>
          <button
            className={`uppercase text-sm  p-1 lg:p-2  lg:hover:bg-orange-600 active:bg-orange-600 active:border-2 active:border-orange-300  rounded-xl shadow-lg ${
              filter === "discount"
                ? "bg-orange-600 border-2 border-orange-300"
                : "bg-orange-800"
            }`}
            onClick={() => handleFilterClick("discount")}
          >
            discounts %
          </button>
        </div>
        <button
          className={`${
            filter === "" ? "hidden" : "text-rose-600 text-3xl pt-5 lg:pt-0"
          }`}
          onClick={clearFilter}
        >
          <RiCloseFill />
        </button>
      </div>
      <div className="flex flex-col items-center md:flex-row md:flex-wrap justify-center mb-28 lg:mb-0 gap-4">
        {filteredCategory.length === 0 ? (
          <div className="flex flex-col items-center text-white py-12  font-bold">
            <p className="text-2xl pb-4">No products available</p>
            <RiEmotionUnhappyLine className="text-6xl" />
          </div>
        ) : (
          filteredCategory.map((product) => (
            <Card key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}

export default ProductCat;
