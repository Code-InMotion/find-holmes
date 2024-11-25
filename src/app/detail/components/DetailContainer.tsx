"use client";

import { useSearchParams } from "next/navigation";

import Header from "@/components/Header";
import PropertyList from "@/components/PropertyList";

export default function DetailContainer() {
  const searchParams = useSearchParams();
  const region = searchParams.get("region");

  return (
    <div className="min-h-screen flex flex-col px-[25px]">
      <Header className="justify-center mt-[100px] mb-[30px]">
        {region || "지역 정보 없음"}
      </Header>
      <PropertyList />
    </div>
  );
}
