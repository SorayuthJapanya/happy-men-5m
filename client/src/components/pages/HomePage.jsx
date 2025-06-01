import React, { useState } from "react";
import HeartCenterOverlay from "../HeartCenterOverlay ";
import AnniversaryLock from "../AnniversaryLock";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../lib/axios";
import toast from "react-hot-toast";
import { useNavigate, useOutletContext } from "react-router-dom";

const HomePage = () => {
  const { handleStartMusic } = useOutletContext();
  const [isClickStart, setIsClickStart] = useState(false);
  const [showLock, setShowLock] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const navigate = useNavigate();

  const { mutate: unlockKey } = useMutation({
    mutationFn: async (key) => {
      const res = await axiosInstance.post("/lock/unlock-key", {
        key,
      });
      return res.data;
    },
    onSuccess: () => {
      toast.success("🔓 เย้ปลดล็อคหัวใจเค้าได้แล้ว เก่งมั้กงับ");
      navigate("/memerize");
    },
    onError: (error) => {
      toast.error("😡 เบเบี๋ลืมวันครบรอบเราได้ยังงาย");
    },
  });

  const handleStart = () => {
    setFadeOut(true);

    setTimeout(() => {
      setIsClickStart(true);
      setShowLock(true);
      handleStartMusic();
    }, 500);
  };

  const handleOpen = (data) => {
    const key = data.key;
    unlockKey(key);
  };
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {!isClickStart && (
        <div
          className={`transition-opacity duration-500 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <HeartCenterOverlay onStart={handleStart} />
        </div>
      )}

      {showLock && (
        <div className="transition-opacity duration-500 opacity-100">
          <AnniversaryLock onUnlock={handleOpen} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
