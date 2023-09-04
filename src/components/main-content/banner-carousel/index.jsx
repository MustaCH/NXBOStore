import React, { useEffect, useState } from "react";

function BannerCarousel(autoPlay) {
  const images = ["banner_1.jpg", "banner_2.jpg", "banner_3.jpg"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, images);
      }, 2000);
      return () => clearInterval(interval);
    }
  });

  const selectNewImage = (index, images, next = true) => {
    const condition = next
      ? selectedIndex < images.length - 1
      : selectedIndex > 0;
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
      ? selectedIndex - 1
      : images.length - 1;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  /*const previous = () => {
    selectNewImage(selectedIndex, images, false);
    console.log("prev");
  };

  const next = () => {
    selectNewImage(selectedIndex, images);
    console.log("next");
  };*/

  return (
    <div className="pt-5 pb-8">
      <div className="h-64 w-full relative text-center inline-block">
        <h2 className="absolute z-50 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-4xl font-bold lg:text-6xl uppercase text-gray-300">
          always be yourself
        </h2>
        <div className="custom-shape-divider-top-1693587918 z-50">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 598.97 114.72 1200 0z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <img
          className="h-full w-full object-cover brightness-50 "
          src={`${selectedImage}`}
          alt="Banner"
        />
        <div className="custom-shape-divider-bottom-1693587976 z-50">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 598.97 114.72 1200 0z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default BannerCarousel;
