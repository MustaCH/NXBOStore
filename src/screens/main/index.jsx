import React, { useEffect, useState } from "react";
import { Header, BannerCarousel } from "../../components/main-content/index";
import {
  getDiscountedProducts,
  getLastAvailable,
  getLatestReleases,
} from "../../database/firebase";
import Card from "../../components/shared/card";

function Main() {
  const [latestReleases, setLatestReleases] = useState([]);
  const [lastAvailable, setLastAvailable] = useState([]);
  const [discountedProducts, setDiscountedProducts] = useState([]);

  useEffect(() => {
    async function fetchLatestReleases() {
      try {
        const latestReleasesData = await getLatestReleases();
        setLatestReleases(latestReleasesData);
      } catch (error) {
        console.error("Error fetching latest releases:", error);
      }
    }

    fetchLatestReleases();
  }, []);

  useEffect(() => {
    async function fetchLastAvailableProducts() {
      try {
        const lastAvailableData = await getLastAvailable();
        setLastAvailable(lastAvailableData);
      } catch (error) {
        console.error("Error fetching last available products:", error);
      }
    }

    fetchLastAvailableProducts();
  }, []);

  useEffect(() => {
    async function fetchDiscountedProducts() {
      try {
        const discountedProductsData = await getDiscountedProducts();
        setDiscountedProducts(discountedProductsData);
      } catch (error) {
        console.error("Error fetching discounted products:", error);
      }
    }

    fetchDiscountedProducts();
  }, []);

  return (
    <main className="lg:pl-28 mb-10">
      <div className="">
        <Header />
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
