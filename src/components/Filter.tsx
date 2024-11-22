import { useEffect, useState } from "react";

import TextInput from "./TextInput";
import Label from "./Label";
import TimeRangeSlider from "./TimeRangeSlider";
import TagList from "./TagList";
import CostRangeSlider from "./CostRangeSlider";
import Button from "./LinkButton";

export default function Filter() {
  const [formValues, setFormValues] = useState({
    companyOrSchool: "",
    commuteTime: [0, 80] as [number, number],
    propertyType: [] as string[],
    transactionType: [] as string[],
    deposit: [0, 300000000] as [number, number],
    monthly: [0, 3500000] as [number, number],
    priority: "",
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 기본 동작 방지
  };

  const handleInputChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormValues(prev => ({ ...prev, [field]: e.target.value }));
    };

  const handleCommuteTimeChange = (values: [number, number]) => {
    setFormValues(prev => ({ ...prev, commuteTime: values }));
  };

  const handlePropertyTypeChange = (selectedTags: string[]) => {
    setFormValues(prev => ({ ...prev, propertyType: selectedTags }));
  };

  const handleTransactionTypeChange = (selectedTags: string[]) => {
    setFormValues(prev => ({ ...prev, transactionType: selectedTags }));
  };

  const handlePriorityChange = (selectedTag: string) => {
    setFormValues(prev => ({ ...prev, priority: selectedTag }));
  };

  const handleCostChange =
    (type: "deposit" | "monthly") => (values: [number, number]) => {
      setFormValues(prev => ({
        ...prev,
        [type]: values,
      }));
    };

  const propertyTypeTags = ["아파트", "오피스텔", "빌라"];
  const transactionTypeTags = ["매매", "전세", "월세"];
  const priorityTags = ["시간", "예산"];

  useEffect(() => {
    const hasValues =
      formValues.companyOrSchool ||
      formValues.propertyType.length > 0 ||
      formValues.transactionType.length > 0 ||
      formValues.priority ||
      formValues.commuteTime[0] !== 0 ||
      formValues.commuteTime[1] !== 80 ||
      formValues.deposit[0] !== 0 ||
      formValues.deposit[1] !== 300000000 ||
      formValues.monthly[0] !== 0 ||
      formValues.monthly[1] !== 3500000;

    setIsButtonDisabled(!hasValues);
  }, [formValues]);

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col gap-[38px] py-[40px]"
    >
      <TextInput
        label="1. 회사 또는 학교를 입력해주세요."
        placeholder="주소를 입력해주세요. (서울시 서대문구 현저동 941)"
        value={formValues.companyOrSchool}
        onChange={handleInputChange("companyOrSchool")}
      />

      <div>
        <Label>2. 희망 소요 시간을 입력해주세요.</Label>
        <TimeRangeSlider
          min={0}
          max={80}
          value={formValues.commuteTime}
          onChange={handleCommuteTimeChange}
        />
      </div>

      <div>
        <Label>3. 원하는 매물 유형을 선택해주세요.</Label>
        <TagList
          tagList={propertyTypeTags}
          onChange={tags => handlePropertyTypeChange(tags as string[])}
        />
      </div>

      <div>
        <Label>4. 원하는 거래 유형을 선택해주세요.</Label>
        <TagList
          tagList={transactionTypeTags}
          onChange={tags => handleTransactionTypeChange(tags as string[])}
        />
      </div>

      <div className="mb-[38px]">
        <Label>5. 예상하시는 가격을 입력해주세요.</Label>
        <div className="flex flex-col gap-[60px]">
          <CostRangeSlider
            min={0}
            max={300000000}
            type="전세/매매/보증금"
            value={formValues.deposit}
            onChange={handleCostChange("deposit")}
          />
          <CostRangeSlider
            min={0}
            max={3500000}
            type="월세"
            value={formValues.monthly}
            onChange={handleCostChange("monthly")}
          />
        </div>
      </div>

      <div>
        <Label>6. 무엇이 더 중요한가요?</Label>
        <TagList
          tagList={priorityTags}
          onChange={tag => handlePriorityChange(tag as string)}
          isSingleSelect={true}
        />
      </div>

      <Button
        theme={isButtonDisabled ? "disabled" : "primary"}
        isDisabled={isButtonDisabled}
        onClick={() => alert("Filter 적용 완료")}
        navigateTo="/top-5"
      >
        지역 추천
      </Button>
    </form>
  );
}
