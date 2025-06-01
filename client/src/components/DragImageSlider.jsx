import React, { useState } from "react";
import { motion } from "framer-motion";

const DragImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnd = (event, info) => {
    setIsDragging(false);

    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      // Swiped right - previous image
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else if (info.offset.x < -swipeThreshold) {
      // Swiped left - next image
      setCurrentIndex((prev) => (prev === images.length - 1 ? prev : prev + 1));
    }
  };

  return (
    <div className="relative w-full  lg:w-2/3 h-[90vh] mt-8 rounded-xl shadow-lg">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
        className="w-full h-full relative"
      >
        {/* Current Image */}
        <div className="absolute inset-0 w-full h-full ">
          <img
            src={images[currentIndex].img}
            alt={images[currentIndex].title}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-2xl">
            <h3 className="font-secondary text-xl md:text-2xl font-semibold">
              {images[currentIndex].title}
            </h3>
            <p className="font-secondary text-sm md:text-base mt-2">
              {images[currentIndex].date}
            </p>
          </div>
        </div>

        {/* Navigation Arrows */}
        {currentIndex > 0 && (
          <button
            onClick={() => setCurrentIndex((prev) => prev - 1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-[2px] rounded-full hover:bg-black/70 transition-all cursor-pointer duration-200"
          >
            &lt;
          </button>
        )}
        {currentIndex < images.length - 1 && (
          <button
            onClick={() => setCurrentIndex((prev) => prev + 1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-[2px] rounded-full hover:bg-black/70 transition-all cursor-pointer duration-200"
          >
            &gt;
          </button>
        )}

        {/* Drag Indicator */}
        {isDragging && (
          <motion.div
            className="absolute top-0 bottom-0 w-1 bg-white/50"
            animate={{
              x: ["-100%", "100%", "-100%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </motion.div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-pink-600 w-6" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Last Image Overlay */}
      {currentIndex === images.length - 1 && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-black/40 rounded-lg p-4 text-center">
            <p className="text-white text-lg font-bold">สุดท้ายแล้วจ้า ♡</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DragImageSlider;
