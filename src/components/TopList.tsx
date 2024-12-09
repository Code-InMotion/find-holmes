"use client";
import { useRouter } from "next/navigation";

import Button from "./LinkButton";
import TopListItem from "./TopListItem";

import { usePropertyStore } from "@/store/usePropertyStore";

export default function TopList() {
  const data = usePropertyStore(state => state.data);
  const router = useRouter();

  const handleClick = (address: string) => {
    // 주소 데이터를 JSON으로 변환해 query 파라미터에 포함
    router.push(`/propertylist?address=${encodeURIComponent(address)}`);
  };

  return (
    <div className="">
      {data.length === 0 ? (
        <div className="flex flex-col justify-center items-center">
          <span className="flex text-brown my-[50px] text-lg">
            아쉽지만 매물이 없습니다ㅠ
          </span>
          <Button
            width="w-[100px]"
            font="font-light"
            theme={"primary"}
            navigateTo="/"
          >
            홈으로 이동
          </Button>
        </div>
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
