import React, { useEffect, useState } from "react";
import {
  getDiscountedProducts,
  getLastAvailable,
  getLatestReleases,
} from "../../database/firebase";
import { Carousel, Header, Card } from "../../components/shared";
import { Link } from "react-router-dom";

function Main() {
  const [latestReleases, setLatestReleases] = useState([]);
  const [lastAvailable, setLastAvailable] = useState([]);
  const [discountedProducts, setDiscountedProducts] = useState([]);

  const slides = [
    {
      url: "https://acdn.mitiendanube.com/stores/969/644/themes/rio/1-slide-1693338550384-4838186764-82ff8fbb102cbdb0c9b8472f3e0977ec1693338718-1024-1024.png?1808517332",
    },
    {
      url: "https://acdn.mitiendanube.com/stores/969/644/themes/rio/1-slide-1693338801164-6854836896-a76b7e09b56f14a77949cd011219e4b81693339027-1024-1024.png?1808517332",
    },
    {
      url: "https://acdn.mitiendanube.com/stores/969/644/themes/rio/1-slide-1693338801164-2990332114-d443be747afa05bce3cf181b5ad3c82a1693339028-1024-1024.png?1808517332",
    },
  ];

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
        <Carousel auto={true} slides={slides} />
        <div className="flex flex-col items-center text-center text-gray-300 uppercase font-semibold pb-12">
          <h2 className="text-3xl text-orange-500">Latest releases</h2>
          <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4">
            {latestReleases.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center text-center text-gray-300 uppercase font-semibold pb-12">
          <h2 className="text-3xl text-orange-500">Last available</h2>
          <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4">
            {lastAvailable.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center text-center text-gray-300 uppercase font-semibold pb-12">
          <h2 className="text-3xl text-orange-500">Discounts %</h2>
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
