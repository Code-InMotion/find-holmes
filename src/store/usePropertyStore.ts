import { create } from "zustand";

import { RequestParams } from "@/types/property";

interface PropertyData {
  address: string;
  propertyCount: number;
  averagePrice: number;
  averageDistance: number;
}

interface PropertyState {
  data: PropertyData[]; // API 응답 데이터 타입
  params: RequestParams; // 요청 시 사용한 params
  setData: (data: PropertyData[]) => void;
  setParams: (params: RequestParams) => void;
}

export const usePropertyStore = create<PropertyState>(set => ({
  data: [], // 초기 데이터
  params: {
    destination: "",
    travelTime: 0,
    sortType: "PRICE", // 기본값
    houseType: [],
    tradeType: [],
  }, // 초기 params
  setData: data => set({ data }), // 데이터 업데이트 함수
  setParams: params => set({ params }),
}));
