"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import BoxLayout from "@/components/BoxLayout";
import Header from "@/components/Header";
import Map from "@/components/Map";
import PropertyDetail from "@/components/PropertyDetail";

import { usePropertyStore } from "@/store/usePropertyStore";
import axios from "axios";
import { PropertyItem } from "@/types/property";
import { mapHouseType, mapTradeType } from "@/utils/mappingType";
import { formatToWonUnit } from "@/utils/formatNumber";

export default function ResultContainer() {
  const [map, setMap] = useState<KakaoMap | null>(null);
  const [propertyData, setPropertyData] = useState<PropertyItem>();
  const params = usePropertyStore(state => state.params);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    if (!id || !params.destination) {
      console.log("propertyId 또는 destination이 유효하지 않습니다.");
      return;
    }

    const fetchPropertyDetail = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_KEY}/property/detail`,
          {
            params: {
              propertyId: id,
              destination: params.destination,
            },
          }
        );
        setPropertyData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("매물 상세 정보 API 요청 중 에러 발생:", error);
      }
    };

    fetchPropertyDetail();
  }, [id, params.destination]);

  useEffect(() => {
    if (map) {
      console.log("Map instance:", map); // map이 업데이트될 때만 로그 출력
    }
  }, [map]);

  return (
    <>
      <div className="w-[400px] h-screen p-[25px] bg-yellow flex flex-col relative">
        <BoxLayout className="flex flex-col mt-[80px] justify-start">
          <Header>{propertyData?.buildingName}</Header>
          <span className="mb-[20px] text-sm text-brown-dark font-light">
            {propertyData?.address} {propertyData?.addressNumber}
          </span>
        </BoxLayout>
        <PropertyDetail
          label="매물 유형"
          value={mapHouseType(propertyData?.houseType)}
        />
        <PropertyDetail
          label="거래 유형"
          value={mapTradeType(propertyData?.tradeType)}
        />
        <PropertyDetail
          label="가격"
          value={
            propertyData?.price && propertyData?.rentPrice
              ? `${formatToWonUnit(propertyData.price)}/${
                  propertyData.rentPrice
                }`
              : propertyData?.price
              ? formatToWonUnit(propertyData.price)
              : propertyData?.rentPrice
          }
        />
        <PropertyDetail label="네이버 부동산 링크" value="바로가기" />
        <PropertyDetail
          label="희망 소요 시간"
          value={propertyData?.travelTime}
        />

        {/* 이미지를 최상위 div의 바닥 가운데에 고정 */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <Image alt="" src="/images/bird.svg" width={150} height={150} />
        </div>
      </div>

      {/* 오른쪽 지도 섹션 */}
      <Map
        setMap={setMap}
        address={`${propertyData?.address} ${propertyData?.addressNumber}`}
      />
    </>
  );
}
