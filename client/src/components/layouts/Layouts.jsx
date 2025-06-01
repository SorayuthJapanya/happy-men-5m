import React, { useRef, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import HomePageVideoBg from "../HomePageVideoBg";

const Layouts = () => {
  const audioRef = useRef();
  const [volume, setVolume] = useState(50);
  const [muted, setMuted] = useState(true);

  const handleStartMusic = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = false;
      setMuted(false);
      audio.volume = volume / 100;
      audio.play().catch((err) =>
        console.warn("Autoplay was prevented:", err)
      );
    }
  };

  const toggleMute = () => {
    setMuted((prev) => {
      if (audioRef.current) {
        audioRef.current.muted = !prev;
      }
      return !prev;
    });
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      <HomePageVideoBg />

      <audio ref={audioRef} loop muted>
        <source src="/assets/WHATFALSE - จรงใจเสมอ.mp3" type="audio/mpeg" />
      </audio>

      {/* 🔊 Volume Control */}
      <div className="group fixed top-4 right-4 bg-white/90 backdrop-blur-md border border-gray-300 p-3 rounded-xl shadow-md flex items-center space-x-2 z-50">
        <label
          htmlFor="volume"
          onClick={toggleMute}
          className="text-gray-700 text-sm cursor-pointer"
        >
          {muted ? "🔇" : "🔊"}
        </label>
        <input
          id="volume"
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="w- sm:w-32 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
        />
        <span className="text-sm text-gray-500 w-8 text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {volume}%
        </span>
      </div>

      {/* 📦 Child Pages */}
      <Outlet context={{ handleStartMusic }} />
    </div>
  );
};

export default Layouts;
