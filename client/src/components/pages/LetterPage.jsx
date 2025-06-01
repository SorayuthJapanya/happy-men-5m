import React, { useState } from "react";

const LetterPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleOpenLetter = () => {
    if (!isOpen) {
      setIsOpen(true);
      // Delay showing content until envelope opens
      setTimeout(() => setShowContent(true), 1000);
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-white/30 flex flex-col items-center justify-center p-4">
      <button
        onClick={() => history.back()}
        className="absolute top-10 left-10 font-thirdary flex gap-3 items-center justify-center px-4 text-pink-600 py-2 bg-white rounded-lg shadow-xl cursor-pointer hover:text-white hover:bg-pink-600 transition-all ease-in-out hover:scale-105"
      >
        <p>&#8249;</p> Back
      </button>

      {!isOpen ? (
        // Closed Envelope
        <div
          onClick={handleOpenLetter}
          className="relative w-64 h-48 md:w-96 md:h-64 bg-pink-400 cursor-pointer transform hover:scale-105 transition-transform duration-300 "
        >
          <div className="absolute top-0 left-0 w-full h-full bg-pink-500 clip-envelope-front z-10"></div>
          <p className="absolute left-29 top-19 md:top-27 md:left-45 text-xl z-100 ">❤</p>
        </div>
      ) : (
        // Opened Letter with Animation
        <div className="relative w-full max-w-md">
          {/* Envelope Back */}

          {/* Letter Paper */}
          <div
            className={`relative bg-white p-8 rounded-lg shadow-lg z-10 min-h-64 transition-all duration-1000 ${
              showContent
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            {showContent && (
              <div className="text-pink-800 font-secondary">
                <h2 className="text-2xl font-bold mb-4 text-center">
                  ถึงเบ้บที่รัก....
                </h2>
                <div className="space-y-4 text-lg">
                  <p>
                    เค้าอาจจะไม่ได้เป็นผู้ชายที่โรแมนติกเหมือนคนอื่นเขา
                    บางครั้งเค้าก็น้อยใจนะตอนเราไม่มีตังไปกินของ อร่อยๆด้วยกันอ่ะ
                    เค้ารู้สึกว่าเค้าตอบแทนเบ้บไม่ได้
                    แต่เค้าก็ต้องขอบคุณเบ้บน๊าที่ยังอยู่กับเค้าคนนี้ไม่ไปไหน
                    เค้ารักเบ้บมากๆเลยน๊า
                    เค้ารู้ว่าเค้าต้องแสดงให้เบ้บเห็นว่าเค้ารักเบ้บจริงๆ
                    เค้าพยายามมากอวดเบ้บให้เพื่อนฟังตลอดเลอ
                    ถึงจะไม่ได้อวดในโซเชียลอ่ะนะ ไม่ต้องน้อยใจไปน๊าเบ้บ
                    เค้ารักเบ้บเหมือนเดินและจะรักเบ้บตลอดไปด้วยงับ{" "}
                  </p>
                </div>
                <div className="flex justify-end text-lg mt-4">
                  ด้วยรักและคิดถึง จาก ยูโร
                </div>
                <div className="flex justify-center mt-6 nmb-2 text-4xl">
                  💖
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Custom CSS for envelope */}
      <style jsx global>{`
        .clip-envelope-front {
          clip-path: polygon(0% 0%, 100% 0%, 50% 50%);
        }
      `}</style>
    </div>
  );
};

export default LetterPage;
