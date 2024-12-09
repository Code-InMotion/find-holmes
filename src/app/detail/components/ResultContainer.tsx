"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import BoxLayout from "@/components/BoxLayout";
import Header from "@/components/Header";
import Map from "@/components/Map";
import PropertyDetail from "@/components/PropertyDetail";

export default function ResultContainer() {
  const [map, setMap] = useState<KakaoMap | null>(null);

  useEffect(() => {
    if (map) {
      console.log("Map instance:", map); // map이 업데이트될 때만 로그 출력
    }
  }, [map]);

  return (
    <>
      <div className="w-[400px] h-screen p-[25px] bg-yellow flex flex-col relative">
        <BoxLayout className="flex flex-col mt-[80px] justify-start">
          <Header>아파트/빌라/오피스텔명</Header>
          <span className="mb-[20px] text-sm text-brown-dark font-light">
            서울시 중랑구 신내동 390-15
          </span>
        </BoxLayout>
        <PropertyDetail label="매물 유형" value="빌라" />
        <PropertyDetail label="거래 유형" value="전세" />
        <PropertyDetail label="가격" value="3,000" />
        <PropertyDetail label="네이버 부동산 링크" value="바로가기" />
        <PropertyDetail label="희망 소요 시간" value="30분" />

        {/* 이미지를 최상위 div의 바닥 가운데에 고정 */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <Image alt="" src="/images/bird.svg" width={150} height={150} />
        </div>
      </div>

      {/* 오른쪽 지도 섹션 */}
      <div className="w-full h-full">
        <Map setMap={setMap} />
      </div>
    </>
  );
}
