"use client";
import { useState } from "react";
import Image from "next/image";
import Slider from "rc-slider";
import RangeSlider from "@/components/RangeSlider";

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
    <div className="px-4 py-5">
      {/* {isVisible && (
        <Image
          src="/images/main.svg"
          alt=""
          fill
          onClick={handleImageClick}
          onAnimationEnd={handleAnimationEnd}
          className={isFadingOut ? "animate-fade-out" : ""}
          style={{ cursor: "pointer" }}
        />
      )} */}

      <RangeSlider min={0} max={100} />
    </div>
  );
}
