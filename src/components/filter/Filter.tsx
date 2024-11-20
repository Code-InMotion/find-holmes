import { useState } from "react";
import Label from "../Label";
import TextInput from "../TextInput";
import TimeRangeSlider from "../TimeRangeSlider";
import TagList from "../TagList";
import CostRangeSlider from "../CostRangeSlider";

export default function Filter() {
  const [formValues, setFormValues] = useState({
    companyOrSchool: "",
    commuteTime: "",
    propertyType: [] as string[],
    transactionType: "",
    priceEstimate: "",
    priority: "",
  });

  const handleInputChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormValues(prev => ({ ...prev, [field]: e.target.value }));
    };

  const handlePropertyTypeChange = (selectedTags: string[]) => {
    setFormValues(prev => ({ ...prev, propertyType: selectedTags }));
  };

  const propertyTypeTags = ["아파트", "오피스텔", "빌라"];

  return (
    <div className="flex flex-col gap-[38px]">
      <TextInput
        label="1. 회사 또는 학교를 입력해주세요."
        placeholder="회사/학교"
        value={formValues.companyOrSchool}
        onChange={handleInputChange("companyOrSchool")}
      />

      <div>
        <Label>2. 희망 소요 시간을 입력해주세요.</Label>
        <TimeRangeSlider min={0} max={80} />
      </div>

      <div>
        <Label>3. 원하는 매물 유형을 선택해주세요.</Label>
        <TagList
          tagList={propertyTypeTags}
          onChange={handlePropertyTypeChange}
        />
      </div>

      <div>
        <Label>4. 원하는 거래 유형을 선택해주세요.</Label>
      </div>

      <div>
        <Label>5. 예상하시는 가격을 입력해주세요.</Label>
        <CostRangeSlider min={0} max={300000000} type="전세/매매/보증금" />
        <CostRangeSlider min={0} max={3500000} type="월세" />
      </div>

      <div>
        <Label>6. 무엇이 더 중요한가요?</Label>
      </div>
    </div>
  );
}
