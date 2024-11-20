"use client";
import Script from "next/script";
import { Dispatch, SetStateAction } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const DEFAULT_LAT = 37.497625203;
const DEFAULT_LNG = 127.03888379;
const DEFAULT_ZOOM = 3;

interface IMapProps {
  setMap: Dispatch<SetStateAction<any>>;
  lat?: string | null;
  lng?: string | null;
  zoom?: string | null;
}

export default function Map({ setMap, lat, lng, zoom }: IMapProps) {
  const loadKakaoMap = () => {
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById("map"); // 지도를 표시할 div
      const mapOption = {
        center: new window.kakao.maps.LatLng(
          lat ? parseFloat(lat) : DEFAULT_LAT, // 위도를 상태로 설정 (null 값 처리)
          lng ? parseFloat(lng) : DEFAULT_LNG // 경도를 상태로 설정 (null 값 처리)
        ), // 지도의 중심 좌표
        level: zoom ? parseInt(zoom) : DEFAULT_ZOOM, // 지도의 확대 레벨
      };
      const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성

      setMap(map); // 상태로 맵 저장
    });
  };

  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_CLIENT}&autoload=false`}
        onReady={loadKakaoMap}
      />
      <div id="map" className="w-full h-screen"></div>
    </>
  );
}