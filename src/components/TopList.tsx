"use client";
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
      {data.map((item, index) => (
        <TopListItem
          key={index}
          rank={index + 1}
          region={item.address}
          count={item.propertyCount}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}
