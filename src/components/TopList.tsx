"use client";

import TopListItem from "./TopListItem";

export default function TopList() {
  const items = [
    {
      rank: 1,
      region: "군포시 재정동",
      description: "13개의 매물이 있습니다.",
      linkText: "보러 가기",
      onClick: () => alert("보러 가기 클릭"),
    },
    {
      rank: 2,
      region: "군포시 재정동",
      description: "13개의 매물이 있습니다.",
      linkText: "보러 가기",
      onClick: () => alert("보러 가기 클릭"),
    },
    {
      rank: 3,
      region: "군포시 재정동",
      description: "13개의 매물이 있습니다.",
      linkText: "보러 가기",
      onClick: () => alert("보러 가기 클릭"),
    },
    {
      rank: 4,
      region: "군포시 재정동",
      description: "13개의 매물이 있습니다.",
      linkText: "보러 가기",
      onClick: () => alert("보러 가기 클릭"),
    },
    {
      rank: 5,
      region: "군포시 재정동",
      description: "13개의 매물이 있습니다.",
      linkText: "보러 가기",
      onClick: () => alert("보러 가기 클릭"),
    },
  ];

  return (
    <div className="">
      {items.map((item, index) => (
        <TopListItem
          key={index}
          rank={item.rank}
          region={item.region}
          description={item.description}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
}
