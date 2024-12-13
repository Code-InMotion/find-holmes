export const formatNumber = (value?: number, scale: number = 1) => {
  if (value === undefined || value === null) return "";
  return new Intl.NumberFormat("ko-KR").format(value * scale);
};

export const formatToWonUnit = (value?: number) => {
  if (value === undefined || value === null) return "";

  // 억 단위와 나머지 계산
  const billionPart = Math.floor(value / 10000); // 만 단위 값에서 억 계산
  const thousandPart = value % 10000; // 나머지 만 단위 값

  // 결과 문자열 생성
  if (billionPart > 0 && thousandPart > 0) {
    return `${billionPart}억 ${thousandPart.toLocaleString()}`;
  } else if (billionPart > 0) {
    return `${billionPart}억`;
  } else {
    return `${thousandPart.toLocaleString()}`;
  }
};
