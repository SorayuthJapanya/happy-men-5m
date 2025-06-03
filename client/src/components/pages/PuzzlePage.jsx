import React, { useEffect, useState } from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import puzzleImage from "../../assets/treecafe.jpg";

const PuzzlePage = () => {
  const [status, setStatus] = useState({
    text: "ต่อจิ๊กซอว์ให้สำเร็จเพื่อรับความรักจากเค้า!",
    emoji: "🧩",
  });
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSolved = () => {
    setStatus({
      text: "🎉 เก่งมากงับเบ้บเค้าภูมิใจในตัวเบ้บน้าค้าบ 💖",
      emoji: "💝",
    });
    setShowConfetti(true);

    // Hide confetti after 5 seconds
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden ">
      {/* Confetti effect when solved */}
      {showConfetti && (
        <div className="fixed inset-0 z-10 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl animate-float"
              style={{
                left: `${Math.random() * 100}vw`,
                top: `${Math.random() * 100}vh`,
                animationDelay: `${Math.random() * 2}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            >
              {["💖", "🎊", "✨", "💝", "🥰"][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}

      <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-7xl mx-auto my-16 sm:my-8 px-4">
        <div>
          <button
            onClick={() => history.back()}
            className="font-thirdary flex gap-3 items-center justify-center px-4 text-pink-600 py-2 bg-white rounded-lg shadow-xl cursor-pointer hover:text-white hover:bg-pink-600 transition-all ease-in-out hover:scale-105"
          >
            <p>&#8249;</p> Back
          </button>
        </div>

        <div className="text-center mt-6">
          <h2 className="font-secondary font-semibold text-xl sm:text-2xl lg:text-3xl text-pink-800">
            {status.text} {status.emoji}
          </h2>
        </div>

        {/* Puzzle Game */}
        <div className="flex justify-center w-full">
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full md:max-w-lg lg:max-w-3xl mx-auto ">
            {/* Puzzle Component */}
            <div className="bg-white p-4 rounded-xl shadow-lg border border-pink-200 text-center w-full mx-auto h-auto">
              <h3 className="font-secondary text-pink-700 text-lg mb-2">
                Puzzle Game
              </h3>
              <JigsawPuzzle
                imageSrc={puzzleImage}
                rows={3}
                columns={3}
                onSolved={handleSolved}
                className="jigsaw-puzzle"
              />
            </div>

            {/* Right Side Preview */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-pink-200 flex flex-col items-center w-full md:max-w-lg lg:max-w-3xl mx-auto h-auto">
              <h3 className="font-secondary text-pink-700 text-lg mb-4">
                Example Puzzle Image
              </h3>
              <img
                src={puzzleImage}
                alt="Preview"
                className="w-full max-w-xs h-full rounded-lg border-2 border-pink-300 shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for the puzzle */}
      <style jsx global>{`
        .jigsaw-puzzle {
          width: 100%;
          max-width: 300px;
          margin: 0 auto;
        }
        @media (min-width: 1024px) {
          .jigsaw-puzzle {
            max-width: 400px;
          }
        }
        .jigsaw-puzzle > div {
          background-color: #fce4ec;
          border: 2px solid #f8bbd0;
          touch-action: none;
        }
        .jigsaw-puzzle > div:hover {
          background-color: #f8bbd0;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default PuzzlePage;
