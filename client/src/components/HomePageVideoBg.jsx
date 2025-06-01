import React from "react";
import videoHeartBg from "../assets/bg-heart.mp4";

const HomePageVideoBg = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover absolute top-0 left-0 -z-10 opacity-70 "
    >
      <source src={videoHeartBg} type="video/mp4" />
    </video>
  );
};

export default HomePageVideoBg;
