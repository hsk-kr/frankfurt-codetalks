"use client";

import Image from "next/image";
import Button from "../Button";

/**
 * Section that shows title and kakao group chatroom link
 */
const TopSection = () => {
  const openKakaoGroupChat = () => {
    window.open("https://open.kakao.com/o/g5kt2Fbf", "_blank");
  };

  return (
    <div className="h-screen relative">
      <div className="absolute h-screen inset-0 z-back">
        <Image
          className="w-full h-full object-cover opacity-60"
          src="/imgs/bg-ffa.jpg"
          alt="Frankfurt"
          width={2000}
          height={1000}
          priority
        />
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex flex-col pb-16">
          <h1 className="text-5xl font-bold text-center">
            Frankfurt CodeTalks
          </h1>
          <div className="flex justify-center mt-8">
            <Button color="yellow" onClick={openKakaoGroupChat}>
              Open Kakao GroupChat
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
