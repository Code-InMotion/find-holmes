"use client";
import { useRouter } from "next/navigation";

import TopListItem from "./TopListItem";

export default function TopList() {
  const router = useRouter();

  const items = [
    {
      rank: 1,
      region: "군포시 재정동",
      count: 12,
    },
    {
      rank: 2,
      region: "군포시 금정동",
      count: 11,
    },
    {
      rank: 3,
      region: "군포시 산본동",
      count: 5,
    },
    {
      rank: 4,
      region: "군포시 재정동",
      count: 2,
    },
    {
      rank: 5,
      region: "군포시 재정동",
      count: 1,
    },
  ];

  // 임시로 쿼리 파라미터로 전달
  const handleClick = (region: string, count: number) => {
    router.push(
      `/detail?region=${encodeURIComponent(region)}&count=${encodeURIComponent(
        count
      )}`
    );
  };

  return (
    <div className="">
      {items.map((item, index) => (
        <TopListItem
          key={index}
          rank={item.rank}
          region={item.region}
          count={item.count}
          onClick={() => handleClick(item.region, item.count)}
        />
      ))}
    </div>
  );
}
