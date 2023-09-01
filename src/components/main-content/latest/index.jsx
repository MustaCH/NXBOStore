import React from "react";
import Card from "../../shared/card";

function LatestReleases() {
  return (
    <div className="lg:col-span-6 flex flex-col items-center text-center text-gray-300 uppercase font-semibold pb-12">
      <h2 className="text-xl lg:text-2xl">Latest releases</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default LatestReleases;
