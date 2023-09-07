import React, { useEffect, useState } from "react";
import { BannerCarousel } from "../../components/main-content/index";
import {
  getDiscountedProducts,
  getLastAvailable,
  getLatestReleases,
} from "../../database/firebase";
import Card from "../../components/shared/card";
import { Header } from "../../components/shared";
import { Link } from "react-router-dom";

function Main() {
  const [latestReleases, setLatestReleases] = useState([]);
  const [lastAvailable, setLastAvailable] = useState([]);
  const [discountedProducts, setDiscountedProducts] = useState([]);

  useEffect(() => {
    async function fetchLatestReleases() {
      const latestReleasesData = await getLatestReleases();
      setLatestReleases(latestReleasesData);
    }

    fetchLatestReleases();
  }, []);

  useEffect(() => {
    async function fetchLastAvailableProducts() {
      const lastAvailableData = await getLastAvailable();
      setLastAvailable(lastAvailableData);
    }

    fetchLastAvailableProducts();
  }, []);

  useEffect(() => {
    async function fetchDiscountedProducts() {
      const discountedProductsData = await getDiscountedProducts();
      setDiscountedProducts(discountedProductsData);
    }

    fetchDiscountedProducts();
  }, []);

  return (
    <main className="lg:pl-28 mb-10">
      <div className="">
        <Header />
        <div className="flex justify-center mt-4 mb-12">
          <Link to={"/product-list"}>
            <button className="bg-orange-500 hover:bg-orange-700 transition-colors duration-300 p-3 text-white font-semibold rounded-xl uppercase">
              View all categories
            </button>
          </Link>
        </div>
        <BannerCarousel />
        <div className="lg:col-span-6 flex flex-col items-center text-center text-gray-300 uppercase font-semibold pb-12">
          <h2 className="text-xl lg:text-2xl">Latest releases</h2>
          <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4">
            {latestReleases.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="lg:col-span-6 flex flex-col items-center text-center text-gray-300 uppercase font-semibold pb-12">
          <h2 className="text-xl lg:text-2xl">Last available</h2>
          <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4">
            {lastAvailable.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="lg:col-span-6 flex flex-col items-center text-center text-gray-300 uppercase font-semibold pb-12">
          <h2 className="text-xl lg:text-2xl">Discounts %</h2>
          <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4">
            {discountedProducts.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
