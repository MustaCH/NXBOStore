import React from "react";
import {
  Header,
  LatestReleases,
  CompleteOutfits,
  Discounts,
  BannerCarousel,
} from "../../components/main-content/index";

function Main() {
  return (
    <main className="lg:pl-28 mb-10">
      <div className="">
        <Header />
        <BannerCarousel />
        <LatestReleases />
        <CompleteOutfits />
        <Discounts />
      </div>
    </main>
  );
}

export default Main;
