import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

interface RangeSliderProps {
  min: number;
  max: number;
  type: "전세/매매/보증금" | "월세";
}

export default function CostRangeSlider({ min, max, type }: RangeSliderProps) {
  const [rangeValues, setRangeValues] = useState<[number, number]>([min, max]);
  const [isMaxUnlimited, setIsMaxUnlimited] = useState(true);
  const midpoint = Math.floor((min + max) / 2); // 중앙 기준값 계산

  // 슬라이더 값 변경 핸들러
  const handleRangeChange = (values: number | number[]) => {
    if (Array.isArray(values) && values.length === 2) {
      setRangeValues([values[0], values[1]]);
      if (values[1] !== max) {
        setIsMaxUnlimited(false); // 오른쪽 핸들을 움직이면 "무제한" 대신 숫자 표시
      } else {
        setIsMaxUnlimited(true); // 오른쪽 값이 max와 같으면 다시 "무제한"으로 표시
      }
    }
  };

  // 금액 형식을 설정하는 함수 (100만 원 단위 이상에서만 값 표시)
  const formatCurrency = (value: number) => {
    const displayValue =
      type === "월세" && value < 10000000
        ? Math.round(value / 100000) * 100000 // 10만 원 단위로 반올림
        : Math.round(value / 1000000) * 1000000; // 100만 원 단위로 반올림

    const billion = Math.floor(displayValue / 100000000);
    const million = Math.floor((displayValue % 100000000) / 10000);
    return `${billion > 0 ? `${billion}억 ` : ""}${
      million > 0 ? `${million}만원` : ""
    }`;
  };

  return (
    <div className="relative w-full px-2">
      {/* 상단 제목과 범위 표시 */}
      <div className="flex justify-between mb-2 font-light text-[15px]">
        <span className=" text-brown-dark">{type}</span>
        <span className="text-brown-light">
          {formatCurrency(rangeValues[0])} ~{" "}
          {isMaxUnlimited ? "무제한" : formatCurrency(rangeValues[1])}
        </span>
      </div>

      {/* 슬라이더 */}
      <Slider
        range
        min={min}
        max={max}
        value={rangeValues}
        onChange={handleRangeChange}
        trackStyle={[{ backgroundColor: "#9D2B3A", height: 8 }]}
        handleStyle={[
          {
            backgroundColor: "#ffffff",
            borderColor: "#9D2B3A",
            width: 24,
            height: 24,
            marginTop: -8,
          },
          {
            backgroundColor: "#ffffff",
            borderColor: "#9D2B3A",
            width: 24,
            height: 24,
            marginTop: -8,
          },
        ]}
        railStyle={{ backgroundColor: "rgba(243, 243, 243, 0.7)", height: 8 }}
      />

      {/* 중앙 기준값 표시 */}
      <div className="flex flex-col items-center absolute left-1/2 transform -translate-x-1/2 mt-4 text-red-light text-xs font-light">
        <span>|</span>
        <span>{formatCurrency(midpoint)}</span>
      </div>
    </div>
  );
}
