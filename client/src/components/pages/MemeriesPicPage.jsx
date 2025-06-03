import React from "react";
import cmZoo from "../../assets/cnxzoo.jpg";
import gwran from "../../assets/gwran.jpg";
import myWaterfall from "../../assets/my-waterfall.jpg";
import cafePrayao from "../../assets/payao-cefe.jpg";
import rain from "../../assets/raintosunshine.jpg";
import tree from "../../assets/treecafe.jpg";
import wbWaterfall from "../../assets/wb-waterfall.jpg";

import DragImageSlider from "../DragImageSlider";

const MemeriesPicPage = () => {
  const images = [
    {
      img: cafePrayao,
      title: "คาเฟ่ที่เราไปเที่ยวด้วยกานครั้งแรก 🥰",
      date: "5 December 2024",
    },
    {
      img: rain,
      title: "คาเฟ่ที่เราได้วาดรูปด้วยกาน 🎨",
      date: "24 January 2024",
    },
    {
      img: cmZoo,
      title: "ลิงสองตัวไปดูเพื่อนที่สวนสัตว์เชียงใหม่ 🙊",
      date: "24 March 2024",
    },
    {
      img: gwran,
      title: "ทั้งกินทั้งเที่ยวทั้งทำคอนเทต์ My man 💪😊",
      date: "Invalid Date",
    },
    {
      img: myWaterfall,
      title: "น้ำตกที่เบ้บเกือบตุยเพราะเดิยเยอะะ 😩",
      date: "Invalid Date",
    },
    {
      img: tree,
      title: "คาเฟ่หลังมอเค้ามัน้อนแมวด้วยย 🐈",
      date: "Invalid Date",
    },
    {
      img: wbWaterfall,
      title: "เป็นการไปน้ำตกที่คนเยอะมั้กๆเลอ แช่เท้าพอล้ากาน 🏞️",
      date: "Invalid Date",
    },
  ];
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-6xl mx-auto my-10">
        <div className="mt-10">
          <button
            onClick={() => history.back()}
            className="font-thirdary flex gap-3 items-center justify-center px-4 text-pink-600 py-2 bg-white rounded-lg shadow-xl cursor-pointer hover:text-white hover:bg-pink-600 transition-all ease-in-out hover:scale-105"
          >
            <p>&#8249;</p> Back
          </button>
        </div>
        <div className="flex justify-center mt-4">
          <DragImageSlider images={images} />
        </div>
        <div className="w-full max-w-2xs sm:max-w-lg md:max-w-xl lg:max-w-2xl mt-6  mx-auto bg-white rounded-lg shadow-md flex flex-col gap-2 items-center justify-center p-6 relative">
          <h2 className="font-thirdary font-semibold text-sm sm:text-lg lg:text-xl text-gray-800">Best Moment with You na Babe</h2>
          <p className="font-thirdary text-xs sm:text-base lg:text-lg text-gray-500">You'er My Everthing na ngub</p>
          <p className="absolute right-0 bottom-2 text-4xl sm:text-5xl">💐</p>
        </div>
      </div>
    </div>
  );
};

export default MemeriesPicPage;
