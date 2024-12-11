export const mapHouseType = (type: string): string => {
  const mapping: Record<string, string> = {
    VILLA: "빌라",
    OFFICETEL: "오피스텔",
    APARTMENT: "아파트",
  };
  return mapping[type] || type;
};

export const mapTradeType = (type: string): string => {
  const mapping: Record<string, string> = {
    SALE: "매매",
    MONTHLY_RENT: "월세",
    LONG_TERM_RENT: "전세",
  };
  return mapping[type] || type;
};
