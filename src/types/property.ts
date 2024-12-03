export type TradeType = "SALE" | "MONTHLY_RENT" | "LONG_TERM_RENT";
export type HouseType = "APARTMENT" | "OFFICETEL" | "VILLA";

// 거래 정보 타입 (Trade)
interface Trade {
  type: TradeType; // 거래 유형: SALE, RENT, LEASE 등
  floor: number; // 층수
  price: number; // 가격 (예: 매매가, 월세 등)
  dealDate: string; // 거래 날짜 (ISO 8601 형식)
}

// 메인 객체 타입 (HouseInfo)
export interface HouseInfo {
  id: string; // 고유 ID
  address: string; // 주소
  houseType: HouseType; // 주택 유형: 아파트, 빌라 등
  buildYear: number; // 건축 연도
  exclusiveArea: number; // 전용 면적 (m²)
  trade: Trade; // 거래 정보
  latitude: number; // 위도
  longitude: number; // 경도
}

export interface RequestParams {
  destination: string;
  travelTime: number;
  sortType: "DISTANCE" | "PRICE";
  houseType?: HouseType[]; // 선택적 필드
  tradeType?: TradeType[]; // 선택적 필드
  minPrice?: number; // 전세/매매 최소 금액
  maxPrice?: number; // 전세/매매 최대 금액
  minRentPrice?: number; // 월세 최소 금액
  maxRentPrice?: number; // 월세 최대 금액
}
