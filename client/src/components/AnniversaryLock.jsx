import React, { useRef, useState } from "react";

const AnniversaryLock = ({ onUnlock }) => {
  const inputRef = useRef([]);
  const [values, setValues] = useState(Array(6).fill(""));

  const handleChange = (e, index) => {
    const val = e.target.value.replace(/\D/g, "");
    if (val.length === 1) {
      const newValues = [...values];
      newValues[index] = val;
      setValues(newValues);
      if (index < 5) {
        inputRef.current[index + 1].focus();
      } else {
        e.target.blur();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      const newValues = [...values];
      newValues[index - 1] = "";
      setValues(newValues);
      inputRef.current[index - 1].focus();
    }
  };

  const handleUnlock = () => {
    const key = values.join("");
    if (key.length === 6) {
      onUnlock({ key: parseInt(key, 10) });
    }
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
      <div className="w-xs md:w-md lg:w-md rounded-xl bg-white p-6 md:p-8 lg-10 shadow-xl text-center flex flex-col gap-2 lg:gap-4">
        <div className="space-y-2 md:space-y-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl">💖</h1>
          <h3 className="font-thirdary font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-700">
            Anniversary's Lock
          </h3>
          <p className="font-secondary text-sm sm:text-sm md:text-lg lg:text-xl text-gray-500">
            วันครบรอบของเราวันไหนน๊า?
          </p>
        </div>

        {/* Input */}
        <div className="flex items-center justify-center space-x-2 mt-4">
          {values.map((val, i) => (
            <input
              key={i}
              ref={(el) => (inputRef.current[i] = el)}
              type="text"
              inputMode="numeric"
              maxLength="1"
              value={val}
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-center border border-gray-300 rounded-md text-lg sm:text-lg md:text-xl lg:text-2xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
            />
          ))}
        </div>

        <button
          onClick={handleUnlock}
          className="w-full py-2 mt-4 bg-pink-500 rounded-md cursor-pointer transitaion-all ease-in-out hover:-translate-y-1 duration-300 hover:bg-pink-600"
        >
          <p className="font-secondary text-sm sm:text-md md:text-lg text-white">
            🤍 ปลดล็อคหัวใจเค้าหน่อยจิเบ้บ 🤍
          </p>
        </button>
      </div>
    </div>
  );
};

export default AnniversaryLock;
