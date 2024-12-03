import { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";

import TextInput from "./TextInput";
import Label from "./Label";
import TimeRangeSlider from "./TimeRangeSlider";
import TagList from "./TagList";
import CostRangeSlider from "./CostRangeSlider";
import Button from "./LinkButton";

import { HouseType, RequestParams, TradeType } from "@/types/property";

export default function Filter() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [requestValues, setRequestValues] = useState<RequestParams>({
    destination: "",
    travelTime: 0,
    sortType: "PRICE",
    houseType: [],
    tradeType: [],
    minPrice: 0,
    maxPrice: 300000000,
    minRentPrice: 0,
    maxRentPrice: 3500000,
  });

  const mapHouseType = (type: string): HouseType => {
    const mapping: Record<string, HouseType> = {
      아파트: "APARTMENT",
      오피스텔: "OFFICETEL",
      빌라: "VILLA",
    };
    return mapping[type];
  };

  const mapTradeType = (type: string): TradeType => {
    const mapping: Record<string, TradeType> = {
      매매: "SALE",
      전세: "LONG_TERM_RENT",
      월세: "MONTHLY_RENT",
    };
    return mapping[type];
  };

  const handleSubmit = async () => {
    // event.preventDefault();

    // 요청 데이터 가공
    const params: RequestParams = {
      destination: requestValues.destination,
      travelTime: requestValues.travelTime,
      sortType: requestValues.sortType,
      houseType: requestValues.houseType,
      tradeType: requestValues.tradeType,
    };

    // 매매/전세만 선택된 경우에만 minPrice, maxPrice 포함
    if (
      requestValues.tradeType?.includes("SALE") ||
      requestValues.tradeType?.includes("LONG_TERM_RENT")
    ) {
      params.minPrice = requestValues.minPrice ?? 0;
      params.maxPrice = requestValues.maxPrice ?? 300000000;
    }

    // 월세만 선택된 경우에만 minRentPrice, maxRentPrice 포함
    if (requestValues.tradeType?.includes("MONTHLY_RENT")) {
      params.minRentPrice = requestValues.minRentPrice ?? 0;
      params.maxRentPrice = requestValues.maxRentPrice ?? 3500000;
    }

    console.log("API 요청 데이터:", params);

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_KEY}/property`,
        {
          params,
          paramsSerializer: params => {
            return qs.stringify(params, { arrayFormat: "repeat" });
          },
        }
      );
      console.log("응답 데이터", response.data);
    } catch (error) {
      console.log("API 요청 중 오류 발생", error);
    }
  };

  const handleInputChange =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement> | string): void => {
      if (typeof e === "string") {
        setRequestValues(prev => ({ ...prev, [field]: e }));
      } else {
        setRequestValues(prev => ({ ...prev, [field]: e.target.value }));
      }
    };

  const handleTravelTimeChange = (value: number) => {
    setRequestValues(prev => ({ ...prev, travelTime: value })); // 단일 값으로 업데이트
  };

  const handleHouseTypeChange = (selectedTags: string[]) => {
    setRequestValues(prev => ({
      ...prev,
      houseType: selectedTags.map(mapHouseType),
    }));
  };

  const handleTradeTypeChange = (selectedTags: string[]) => {
    setRequestValues(prev => ({
      ...prev,
      tradeType: selectedTags.map(mapTradeType),
    }));
  };

  const handleSortTypeChange = (selectedTag: string) => {
    setRequestValues(prev => ({
      ...prev,
      sortType: selectedTag === "시간" ? "DISTANCE" : "PRICE",
    }));
  };

  const handleCostChange =
    (type: "minPrice" | "maxPrice" | "minRentPrice" | "maxRentPrice") =>
    (values: number) => {
      setRequestValues(prev => ({
        ...prev,
        [type]: values,
      }));
    };

  const houseTypeTags = ["아파트", "오피스텔", "빌라"];
  const tradeTypeTags = ["매매", "전세", "월세"];
  const sortTypeTags = ["시간", "예산"];

  useEffect(() => {
    const requiredFieldsSelected =
      requestValues.destination.trim() !== "" &&
      (requestValues.houseType?.length ?? 0) &&
      (requestValues.tradeType?.length ?? 0) &&
      requestValues.sortType.trim() !== "";

    setIsButtonDisabled(!requiredFieldsSelected);
  }, [requestValues]);

  return (
    <div className="flex flex-col gap-[38px] py-[40px]">
      <TextInput
        label="1. 회사 또는 학교를 입력해주세요."
        placeholder="서울시 서대문구 현저동 941"
        value={requestValues.destination}
        onChange={handleInputChange("destination")}
      />

      <div>
        <Label>2. 희망 소요 시간을 입력해주세요.</Label>
        <TimeRangeSlider
          min={0}
          max={80}
          value={requestValues.travelTime}
          onChange={handleTravelTimeChange}
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
          {/* 매매/전세가 선택된 경우 */}
          {(requestValues.tradeType?.includes("SALE") ||
            requestValues.tradeType?.includes("LONG_TERM_RENT")) && (
            <CostRangeSlider
              min={0}
              max={300000000}
              type="전세/매매/보증금"
              value={[
                requestValues.minPrice ?? 0,
                requestValues.maxPrice ?? 300000000,
              ]}
              onChange={([min, max]) => {
                handleCostChange("minPrice")(min);
                handleCostChange("maxPrice")(max);
              }}
            />
          )}

          {/* 월세가 선택된 경우 */}
          {requestValues.tradeType?.includes("MONTHLY_RENT") && (
            <CostRangeSlider
              min={0}
              max={3500000}
              type="월세"
              value={[
                requestValues.minRentPrice ?? 0,
                requestValues.maxRentPrice ?? 3500000,
              ]}
              onChange={([min, max]) => {
                handleCostChange("minRentPrice")(min);
                handleCostChange("maxRentPrice")(max);
              }}
            />
          )}
        </div>
      </div>

      <div>
        <Label>6. 무엇이 더 중요한가요?</Label>
        <TagList
          tagList={sortTypeTags}
          onChange={tag => handleSortTypeChange(tag as string)}
          isSingleSelect={true}
        />
      </div>

      <Button
        theme={isButtonDisabled ? "disabled" : "primary"}
        isDisabled={isButtonDisabled}
        onClick={handleSubmit}
        navigateTo="/top-5"
      >
        지역 추천
      </Button>
    </div>
  );
}
