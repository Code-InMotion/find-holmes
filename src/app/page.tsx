"use client";
import { useState } from "react";
import Image from "next/image";

import Filter from "@/components/filter/Filter";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleImageClick = () => {
    setIsFadingOut(true);
  };

  const handleAnimationEnd = () => {
    setIsVisible(false);
  };

  return (
    <div className="px-[26px]">
      {isVisible && (
        <Image
          src="/images/main.svg"
          alt=""
          fill
          onClick={handleImageClick}
          onAnimationEnd={handleAnimationEnd}
          className={isFadingOut ? "animate-fade-out" : ""}
          style={{ cursor: "pointer", zIndex: "100" }}
        />
      )}

      <div>
        <Filter />
      </div>
    </div>
  );
}
