"use client";
import Button from "./LinkButton";
import TopListItem from "./TopListItem";
import { usePropertyStore } from "@/store/usePropertyStore";

export default function TopList() {
  const data = usePropertyStore(state => state.data);
  // 임시로 쿼리 파라미터로 전달
  const handleClick = () => {
    // router.push(
    //   `/detail?region=${encodeURIComponent(region)}&count=${encodeURIComponent(
    //     count
    //   )}`
    // );
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
            onClick={handleClick}
          />
        ))
      )}
    </div>
  );
}
