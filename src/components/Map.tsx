"use client";
import Script from "next/script";
import { Dispatch, SetStateAction, useEffect } from "react";

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
        services: {
          Geocoder: new () => KakaoGeocoder;
        };
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

  interface MarkerOptions {
    position: LatLng;
    image?: MarkerImage;
    map?: KakaoMap;
  }

  interface KakaoMarker {
    setMap: (map: KakaoMap | null) => void;
    setPosition: (position: LatLng) => void;
  }

  interface KakaoGeocoder {
    addressSearch: (
      address: string,
      callback: (result: KakaoGeocoderResult[], status: string) => void
    ) => void;
  }

  interface KakaoGeocoderResult {
    address_name: string;
    y: string; // 위도
    x: string; // 경도
  }
}

const DEFAULT_ZOOM = 3;

interface IMapProps {
  setMap: Dispatch<SetStateAction<KakaoMap | null>>;
  address?: string;
  zoom?: string | null;
}

export default function Map({ setMap, address, zoom }: IMapProps) {
  useEffect(() => {
    if (!address) {
      return; // 주소가 없으면 로직 실행 안 함
    }

    const initializeMap = (lat: number, lng: number) => {
      const mapContainer = document.getElementById("map") as HTMLElement;
      const mapOption = {
        center: new window.kakao.maps.LatLng(lat, lng),
        level: zoom ? parseInt(zoom) : DEFAULT_ZOOM,
      };

      const map = new window.kakao.maps.Map(mapContainer, mapOption);

      const markerImageSrc = "/images/marker.svg";
      const imageSize = new window.kakao.maps.Size(40, 40);
      const markerImage = new window.kakao.maps.MarkerImage(
        markerImageSrc,
        imageSize
      );

      const markerPosition = new window.kakao.maps.LatLng(lat, lng);

      new window.kakao.maps.Marker({
        position: markerPosition,
        map: map,
        image: markerImage,
      });

      setMap(map);
    };

    const geocodeAddress = () => {
      const geocoder = new window.kakao.maps.services.Geocoder();

      geocoder.addressSearch(address, (result, status) => {
        if (status === "OK") {
          const { y, x } = result[0]; // 위도, 경도
          initializeMap(parseFloat(y), parseFloat(x));
        } else {
          console.error("주소 검색 실패:", status);
        }
      });
    };

    if (window.kakao && window.kakao.maps) {
      // Kakao Maps API가 이미 로드된 경우
      window.kakao.maps.load(geocodeAddress);
    } else {
      console.error("Kakao Maps API가 로드되지 않았습니다.");
    }
  }, [address, setMap, zoom]);

  if (!address) {
    return <div>지도 정보를 불러오는 중...</div>;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_CLIENT}&libraries=services&autoload=false`}
      />
      <div id="map" className="w-full h-screen"></div>
    </>
  );
}
