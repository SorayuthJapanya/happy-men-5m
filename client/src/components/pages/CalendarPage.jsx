import React, { useEffect, useState } from "react";
import pic from "../../assets/gwran.jpg";

const CalendarPage = () => {
  const [duration, setDuration] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const startDate = new Date("2024-12-25T00:00:00");

    const updateDuration = () => {
      const now = new Date();

      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      let days = now.getDate() - startDate.getDate();

      if (days < 0) {
        // ยืมวันจากเดือนก่อนหน้า
        months--;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0); // วันสุดท้ายของเดือนก่อน
        days += prevMonth.getDate();
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      setDuration({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
      });
    };

    updateDuration();
    const interval = setInterval(updateDuration, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden ">
      <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto my-16 sm:my-6 px-4">
        <div>
          <button
            onClick={() => history.back()}
            className="font-thirdary flex gap-3 items-center justify-center px-4 text-pink-600 py-2 bg-white rounded-lg shadow-xl cursor-pointer hover:text-white hover:bg-pink-600 transition-all ease-in-out hover:scale-105"
          >
            <p>&#8249;</p> Back
          </button>
        </div>

        <div className="mt-4 space-y-2 text-center">
          <h1 className="font-thirdary font-semibold text-pink-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Our Love Journey
          </h1>
          <p className="font-secondary text-pink-700 text-sm sm:text-base md:text-lg">
            เราคบกันนานแค่ไหนแล้วน๊าาาาาา ?
          </p>
          <p className="text-3xl">❤️</p>
        </div>

        <div className="mt-8 flex justify-center mx-auto w-48 h-48 md:w-64 md:h-64">
          <img
            src={pic}
            alt="couple"
            className="w-full h-full object-cover object-center rounded-full border-4 border-pink-300 shadow-lg"
          />
        </div>

        {/* Duration Counter */}
        <div className="mt-4 w-5/5 md:w-2/3 mx-auto text-center bg-white rounded-lg shadow-md p-2 sm:p-4">
          <div className="flex justify-center items-center space-x-1 sm:space-x-2">
            <div className="text-center">
              <span className="text-2xl sm:text-4xl font-bold text-pink-600">
                {duration.years}
              </span>
              <p className="text-pink-700 text-sm">Y</p>
            </div>
            <span className="text-2xl sm:text-4xl text-pink-400">:</span>
            <div className="text-center">
              <span className="text-2xl sm:text-4xl font-bold text-pink-600">
                {duration.months}
              </span>
              <p className="text-pink-700 text-sm">M</p>
            </div>
            <span className="text-2xl sm:text-4xl text-pink-400">:</span>
            <div className="text-center">
              <span className="text-2xl sm:text-4xl font-bold text-pink-600">
                {duration.days}
              </span>
              <p className="text-pink-700 text-sm">D</p>
            </div>
            <span className="text-2xl sm:text-4xl text-pink-400">:</span>
            <div className="text-center">
              <span className="text-2xl sm:text-4xl font-bold text-pink-600">
                {duration.hours}
              </span>
              <p className="text-pink-700 text-sm">H</p>
            </div>
            <span className="text-2xl sm:text-4xl text-pink-400">:</span>
            <div className="text-center">
              <span className="text-2xl sm:text-4xl font-bold text-pink-600">
                {duration.minutes}
              </span>
              <p className="text-pink-700 text-sm">MIN</p>
            </div>
            <span className="text-2xl sm:text-4xl text-pink-400">:</span>
            <div className="text-center">
              <span className="text-2xl sm:text-4xl font-bold text-pink-600">
                {duration.seconds}
              </span>
              <p className="text-pink-700 text-sm">SEC</p>
            </div>
          </div>
          <p className="hidden sm:block mt-6 text-pink-600 text-lg">
            💖 Since 25 December 2024 💖
          </p>
        </div>

        <div className="mt-8 w-full md:w-2/3 mx-auto text-center p-4 bg-white rounded-lg shadow-md">
          <p className="font-primary text-pink-700 text-lg md:text-xl">
            "I hope we'll continue making beautiful memories together forever"
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
