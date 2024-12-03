import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

interface RangeSliderProps {
  min: number;
  max: number;
  value: [number, number];
  onChange: (values: [number, number]) => void;
  type: "전세/매매/보증금" | "월세";
}

export default function CostRangeSlider({
  min,
  max,
  type,
  value,
  onChange,
}: RangeSliderProps) {
  const [rangeValues, setRangeValues] = useState<[number, number]>([min, max]);
  const [isMaxUnlimited, setIsMaxUnlimited] = useState(true);
  const midpoint = Math.floor((min + max) / 2); // 중앙 기준값 계산

  // value가 변경되면 내부 상태 동기화
  useEffect(() => {
    if (value) {
      setRangeValues(value);
      setIsMaxUnlimited(value[1] === max); // 오른쪽 핸들이 max인지 확인
    }
  }, [value, max]);

  // 슬라이더 값 변경 핸들러
  const handleRangeChange = (values: [number, number]) => {
    setRangeValues(values);
    onChange(values); // 부모 컴포넌트에 값 전달
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
      <div className="flex justify-between mb-2 font-light text-xs">
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
        onChange={(values: number | number[]) => {
          if (Array.isArray(values)) handleRangeChange([values[0], values[1]]);
        }}
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
