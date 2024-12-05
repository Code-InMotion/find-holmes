"use client";
import Header from "@/components/Header";
import PropertyList from "@/components/PropertyList";

import { useSearchParams } from "next/navigation";

export default function DetailContainer() {
  const searchParams = useSearchParams();
  const address = searchParams.get("address");

  return (
    <div className="min-h-screen flex flex-col px-[25px]">
      <Header className="justify-center mt-[100px] mb-[30px]">
        {address || ""}
      </Header>
      <PropertyList />
    </div>
  );
}
