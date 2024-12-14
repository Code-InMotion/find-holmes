"use client";
import { useRouter } from "next/navigation";

import TopListItem from "./TopListItem";
import NoItem from "./NoItem";

import { usePropertyStore } from "@/store/usePropertyStore";

export default function TopList() {
  const data = usePropertyStore(state => state.data);
  const router = useRouter();

  const handleClick = (address: string) => {
    // 주소 데이터를 JSON으로 변환해 query 파라미터에 포함
    router.push(`/properties?address=${encodeURIComponent(address)}`);
  };

  return (
    <div className="">
      {data.length === 0 ? (
        <NoItem />
      ) : (
        data.map((item, index) => (
          <TopListItem
            key={index}
            rank={index + 1}
            region={item.address}
            count={item.propertyCount}
            onClick={() => handleClick(item.address)}
          />
        ))
      )}
    </div>
  );
}
