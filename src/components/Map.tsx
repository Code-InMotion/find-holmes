"use client";
import Script from "next/script";
import { Dispatch, SetStateAction } from "react";

declare global {
  interface Window {
    kakao: {
      maps: {
        load: (callback: () => void) => void;
        LatLng: new (lat: number, lng: number) => LatLng;
        Map: new (container: HTMLElement, options: MapOptions) => KakaoMap;
      };
    };
  }

  interface LatLng {
    lat: () => number;
    lng: () => number;
  }

  interface MapOptions {
    center: LatLng;
    level: number;
  }

  interface KakaoMap {
    setCenter: (latLng: LatLng) => void;
    getCenter: () => LatLng;
    setLevel: (level: number) => void;
    getLevel: () => number;
  }
}

const DEFAULT_LAT = 37.497625203;
const DEFAULT_LNG = 127.03888379;
const DEFAULT_ZOOM = 3;

interface IMapProps {
  setMap: Dispatch<SetStateAction<KakaoMap | null>>;
  lat?: string | null;
  lng?: string | null;
  zoom?: string | null;
}

export default function Map({ setMap, lat, lng, zoom }: IMapProps) {
  const loadKakaoMap = () => {
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById("map") as HTMLElement; // 지도를 표시할 div
      const mapOption = {
        center: new window.kakao.maps.LatLng(
          lat ? parseFloat(lat) : DEFAULT_LAT,
          lng ? parseFloat(lng) : DEFAULT_LNG
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
        src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_CLIENT}&autoload=false`}
        onReady={loadKakaoMap}
      />
      <div id="map" className="w-full h-screen"></div>
    </>
  );
}
