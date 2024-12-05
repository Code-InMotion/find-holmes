import { HouseType, TradeType } from "@/types/property";

export const mapHouseType = (type: string): HouseType => {
  const mapping: Record<string, HouseType> = {
    아파트: "APARTMENT",
    오피스텔: "OFFICETEL",
    빌라: "VILLA",
  };
  return mapping[type];
};

export const mapTradeType = (type: string): TradeType => {
  const mapping: Record<string, TradeType> = {
    매매: "SALE",
    전세: "LONG_TERM_RENT",
    월세: "MONTHLY_RENT",
  };
  return mapping[type];
};
