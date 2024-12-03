import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

interface RangeSliderProps {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}

export default function TimeRangeSlider({
  min,
  max,
  value,
  onChange,
}: RangeSliderProps) {
  const [sliderValue, setSliderValue] = useState<number>(0); // 초기값 0으로 설정

  useEffect(() => {
    setSliderValue(value || 0); // 외부에서 value 변경 시 내부 상태 업데이트
  }, [value]);

  const handleSliderChange = (value: number | number[]) => {
    // 단일 값 슬라이더로 사용하기 때문에 값이 number인지 확인
    if (typeof value === "number") {
      setSliderValue(value);
      onChange(value); // 부모 컴포넌트에 값 전달
    }
  };

  return (
    <div>
      <div className="w-full px-2">
        <Slider
          min={min}
          max={max}
          value={sliderValue}
          onChange={handleSliderChange}
          trackStyle={[
            {
              backgroundColor: sliderValue > 0 ? "#9D2B3A" : "#9D2B3A",
              height: 8,
            },
          ]}
          handleStyle={{
            backgroundColor: "#ffffff",
            borderColor: sliderValue > 0 ? "#9D2B3A" : "#9D2B3A",
            width: 24,
            height: 24,
            marginTop: -8,
          }}
          railStyle={{ backgroundColor: "rgba(243, 243, 243, 0.7)", height: 8 }}
        />
      </div>
      <div className="flex justify-end mt-[13px] font-light text-brown-light text-xs">
        <span>{sliderValue}분</span>
      </div>
    </div>
  );
}
