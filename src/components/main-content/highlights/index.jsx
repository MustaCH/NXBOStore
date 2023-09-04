import React, { useEffect, useState } from "react";
import Card from "../../shared/card";
import { getProducts } from "../../../database/firebase";

function Highlights(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {products.map((product) => {
        return <Card key={product.id} product={product} />;
      })}
    </div>
  );
}

export default Highlights;
