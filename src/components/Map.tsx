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
        Marker: new (options: MarkerOptions) => KakaoMarker;
        MarkerImage: new (src: string, size: Size) => MarkerImage;
        Size: new (width: number, height: number) => Size;
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

  interface Size {
    width: number;
    height: number;
  }

  interface MarkerImage {
    src: string;
    size: Size;
  }

  interface KakaoMap {
    setCenter: (latLng: LatLng) => void;
    getCenter: () => LatLng;
    setLevel: (level: number) => void;
    getLevel: () => number;
  }

  // 추가된 타입 선언
  interface MarkerOptions {
    position: LatLng; // 마커의 위치
    image?: MarkerImage; // 마커의 이미지
    map?: KakaoMap; // 마커를 표시할 지도 (선택 사항)
  }

  interface KakaoMarker {
    setMap: (map: KakaoMap | null) => void; // 마커를 지도에 추가 또는 제거
    setPosition: (position: LatLng) => void; // 마커 위치 설정
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

      // 마커 이미지 생성
      const markerImageSrc = "images/marker.svg"; // public 폴더의 이미지 경로
      const imageSize = new window.kakao.maps.Size(40, 40); // 이미지 크기 설정
      const markerImage = new window.kakao.maps.MarkerImage(
        markerImageSrc,
        imageSize
      );

      // 마커 생성
      const markerPosition = new window.kakao.maps.LatLng(
        parseFloat(lat || DEFAULT_LAT.toString()),
        parseFloat(lng || DEFAULT_LNG.toString())
      );

      new window.kakao.maps.Marker({
        position: markerPosition,
        map: map, // 마커를 지도에 표시
        image: markerImage, // 마커 이미지 설정
      });

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
