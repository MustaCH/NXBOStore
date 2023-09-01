import React from "react";
import Card from "../../shared/card";

function Discounts() {
  return (
    <div className="flex flex-col lg:col-span-6 items-center text-center text-gray-300 uppercase font-semibold pb-12">
      <h2 className="text-xl lg:text-2xl">Discounts -%</h2>
      <div className="flex flex-col lg:flex-row items-center justify-start overflow-x-hidden	gap-4">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Discounts;
