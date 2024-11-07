import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

interface RangeSliderProps {
  min: number;
  max: number;
}

export default function TimeRangeSlider({ min, max }: RangeSliderProps) {
  const [rangeValues, setRangeValues] = useState<[number, number]>([min, max]);

  const handleRangeChange = (values: number | number[]) => {
    if (Array.isArray(values) && values.length === 2) {
      setRangeValues([values[0], values[1]]);
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
