import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

interface RangeSliderProps {
  min: number;
  max: number;
  value: [number, number];
  onChange: (values: [number, number]) => void;
}

export default function TimeRangeSlider({
  min,
  max,
  value,
  onChange,
}: RangeSliderProps) {
  const [rangeValues, setRangeValues] = useState<[number, number]>([min, max]);

  useEffect(() => {
    setRangeValues(value || [min, max]); // 외부에서 value 변경 시 내부 상태 업데이트
  }, [value, min, max]);

  const handleRangeChange = (values: number | number[]) => {
    if (Array.isArray(values) && values.length === 2) {
      setRangeValues([values[0], values[1]]);
      onChange([values[0], values[1]]); // 부모 컴포넌트에 값 전달
    }
  };

  return (
    <div>
      <div className="w-full px-2">
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
      </div>
      <div className="flex justify-between mt-[13px] font-light text-brown-light text-xs">
        <span>{rangeValues[0]}분</span>
        <span>{rangeValues[1]}분</span>
      </div>
    </div>
  );
}
