"use client";
import PropertyListItem from "./PropertyListItem";

export default function PropertyList() {
  const items = [
    {
      rentType: "월세",
      price: "1000/70",
      timeRequired: 35,
      address: "서울시 중랑구 신내동 395-15",
      typeInfo: "오피스텔, 3/10층",
    },
    {
      imageUrl: "",
      rentType: "월세",
      price: "1000/70",
      timeRequired: 35,
      address: "서울시 중랑구 신내동 395-15",
      typeInfo: "오피스텔, 3/10층",
    },
  ];

  const handleClick = () => {};

  return (
    <>
      {items.map((item, index) => (
        <PropertyListItem
          key={index}
          rentType={item.rentType}
          price={item.price}
          timeRequired={item.timeRequired}
          address={item.address}
          typeInfo={item.typeInfo}
          onClick={handleClick}
        />
      ))}
    </>
  );
}
