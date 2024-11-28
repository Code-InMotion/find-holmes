import { useEffect, useState } from "react";

import TextInput from "./TextInput";
import Label from "./Label";
import TimeRangeSlider from "./TimeRangeSlider";
import TagList from "./TagList";
import CostRangeSlider from "./CostRangeSlider";
import Button from "./LinkButton";

export default function Filter() {
  const [formValues, setFormValues] = useState({
    address: "",
    commuteTime: [0, 80] as [number, number],
    houseType: [] as string[], // 매물 유형
    tradeType: [] as string[], // 거래 유형
    deposit: [0, 300000000] as [number, number],
    monthly: [0, 3500000] as [number, number],
    priority: "",
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Form Values:", formValues);
  };

  const handleInputChange =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement> | string): void => {
      if (typeof e === "string") {
        setFormValues(prev => ({ ...prev, [field]: e }));
      } else {
        setFormValues(prev => ({ ...prev, [field]: e.target.value }));
      }
    };

  const handleCommuteTimeChange = (values: [number, number]) => {
    setFormValues(prev => ({ ...prev, commuteTime: values }));
  };

  const handleHouseTypeChange = (selectedTags: string[]) => {
    setFormValues(prev => ({ ...prev, houseType: selectedTags }));
  };

  const handleTradeTypeChange = (selectedTags: string[]) => {
    setFormValues(prev => ({ ...prev, tradeType: selectedTags }));
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

  const houseTypeTags = ["아파트", "오피스텔", "빌라"];
  const tradeTypeTags = ["매매", "전세", "월세"];
  const priorityTags = ["시간", "예산"];

  useEffect(() => {
    const requiredFieldsSelected =
      formValues.address.trim() !== "" &&
      formValues.houseType.length > 0 &&
      formValues.tradeType.length > 0 &&
      formValues.priority.trim() !== "";

    setIsButtonDisabled(!requiredFieldsSelected);
  }, [formValues]);

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col gap-[38px] py-[40px]"
    >
      <TextInput
        label="1. 회사 또는 학교를 입력해주세요."
        placeholder="서울시 서대문구 현저동 941"
        value={formValues.address}
        onChange={handleInputChange("address")}
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
          tagList={houseTypeTags}
          onChange={tags => handleHouseTypeChange(tags as string[])}
        />
      </div>

      <div>
        <Label>4. 원하는 거래 유형을 선택해주세요.</Label>
        <TagList
          tagList={tradeTypeTags}
          onChange={tags => handleTradeTypeChange(tags as string[])}
        />
      </div>

      <div className="mb-[38px]">
        <Label>5. 예상하시는 가격을 입력해주세요.</Label>
        <div className="flex flex-col gap-[60px]">
          {/* 초기 상태나 매매/전세가 선택된 경우 보증금 슬라이더 표시 */}
          {(formValues.tradeType.length === 0 ||
            formValues.tradeType.includes("매매") ||
            formValues.tradeType.includes("전세")) && (
            <CostRangeSlider
              min={0}
              max={300000000}
              type="전세/매매/보증금"
              value={formValues.deposit}
              onChange={handleCostChange("deposit")}
            />
          )}

          {/* 초기 상태나 월세가 선택된 경우 월세 슬라이더 표시 */}
          {(formValues.tradeType.length === 0 ||
            formValues.tradeType.includes("월세")) && (
            <CostRangeSlider
              min={0}
              max={3500000}
              type="월세"
              value={formValues.monthly}
              onChange={handleCostChange("monthly")}
            />
          )}
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
        onClick={() => {}}
        navigateTo="/top-5"
      >
        지역 추천
      </Button>
    </form>
  );
}
