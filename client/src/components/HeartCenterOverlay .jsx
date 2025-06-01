import React from "react";
import heart from "../assets/heart.png";

const HeartCenterOverlay = ({ onStart }) => {
  return (
    <>
      <img
        src={heart}
        alt="heart"
        className="size-80 sm:size-120 md:size-140 lg:size-180 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
      />
      <div className="absolute top-0 left-0 w-full h-full z-20 flex flex-col space-y-2 lg:space-y-4 items-center justify-center text-white ">
        <h1 className="font-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold drop-shadow-md/80">
          Happy Mensiversary 5M!
        </h1>
        <p className="font-secondary text-xs sm:text-sm md:text-lg lg:text-xl drop-shadow-xs/50">
          ของขวัญสุดพิเศษสำหรับคนเก่งของเค้างับ 💌
        </p>
        <div className="flex items-center justify-center">
          <button
            onClick={onStart}
            className="font-thirdary text-sm sm:text-md md:text-lg lg:text-xl px-3 sm:px-4 py-1 bg-white rounded-full text-pink-400 hover:bg-pink-400 hover:text-white transition-all ease-in-out hover:-translate-y-[2px] duration-300 cursor-pointer border-2 border-pink-300"
          >
            <p>Start!!</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeartCenterOverlay;
