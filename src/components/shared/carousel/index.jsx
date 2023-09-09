import React, { useCallback, useEffect, useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

function Carousel({ auto = true, slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const autoAdvance = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  useEffect(() => {
    let intervalId;

    if (auto) {
      intervalId = setInterval(() => {
        autoAdvance();
      }, 2000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [auto, autoAdvance]);

  return (
    <div className="max-w-80 h-60 md:h-96 w-full pb-16 pt-2 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="brightness-75 flex w-full h-full bg-center bg-cover duration-500 text-center items-center justify-center"
      >
        <p className="text-5xl md:text-8xl font-bold text-gray-100 pb-2 uppercase text-shadow-xl">
          Always be yourself
        </p>
      </div>
      <div className="hidden lg:group-hover:block absolute top-[40%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <RiArrowLeftSLine onClick={prevSlide} />
      </div>
      <div className="hidden lg:group-hover:block absolute top-[40%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <RiArrowRightSLine onClick={nextSlide} />
      </div>
    </div>
  );
}

export default Carousel;
