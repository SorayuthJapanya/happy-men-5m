import React from "react";
import HomePageVideoBg from "../HomePageVideoBg";
import carema from "../../assets/camera.webp";
import calendar from "../../assets/calendar.webp";
import puzzle from "../../assets/rose.webp";
import letter from "../../assets/letter.webp";
import { useNavigate } from "react-router-dom";

const MemerizePage = () => {
  const navigate = useNavigate();
  const allMenuOfLove = [
    {
      id: 1,
      img: carema,
      title: "Our Memories",
      info: "ทุกโมเมนต์ที่เราทำด้วยกาน 💗",
      emoji: "♡",
      path: "/memeries",
    },
    {
      id: 2,
      img: calendar,
      title: "Love Calendar",
      info: "ทุกๆวินาทีที่เราผ่านด้วยกาน 👩‍❤️‍💋‍👨",
      emoji: "♡",
      path: "/calendar",
    },
    {
      id: 3,
      img: puzzle,
      title: "Love Puzzle",
      info: "เค้ามีเกมมาให้เล่นค้าบคนเก่ง 💝",
      emoji: "♡",
      path: "/puzzle",
    },
    {
      id: 4,
      img: letter,
      title: "Love Notes",
      info: "ลองอ่านดูจิเค้าเขียนเองเลยน๊า 💌",
      emoji: "♡",
      path: "/letter",
    },
  ];

  const handlePath = (path) => {
    navigate(path);
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <header className="my-20 md:my-10 text-center">
        <h1 className="font-thirdary text-xl sm:text-2xl md:text-3xl lg:text-4xl text-pink-200">
          ♡ Together Forever ♡
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-2 md:p-4 max-w-md md:max-w-3xl lg:max-w-6xl mx-auto my-6 md:my-8">
          {allMenuOfLove.map((love) => (
            <div
              key={love.id}
              onClick={() => handlePath(love.path)}
              className="flex flex-col items-center justify-center space-y-2 p-6 md:p-10 bg-white rounded-xl transition-all duration-300 hover:scale-105 shadow-pink-300 shadow-lg h-full cursor-pointer w-full max-w-2xs sm:max-w-md md:max-w-xl mx-auto"
            >
              <div className="size-22 mb-4 p-4 bg-red-200 rounded-full">
                <img
                  src={love.img}
                  alt={love.title}
                  className="w-full h-full object-contain fill-transparent"
                />
              </div>
              <h2 className="font-thirdary font-semibold text-3xl text-pink-400 mb-2">
                {love.title}
              </h2>
              <p className="font-secondary text-pink-300 text-sm md:text-base text-center">
                {love.info}
              </p>
              <p className="text-pink-500 text-2xl text-center">{love.emoji}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
};

export default MemerizePage;
