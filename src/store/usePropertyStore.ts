import { create } from "zustand";

interface PropertyData {
  address: string;
  propertyCount: number;
  averagePrice: number;
  averageDistance: number;
}

interface PropertyState {
  data: PropertyData[]; // API 응답 데이터 타입
  setData: (data: PropertyData[]) => void;
}

export const usePropertyStore = create<PropertyState>(set => ({
  data: [], // 초기 데이터
  setData: data => set({ data }), // 데이터 업데이트 함수
}));
