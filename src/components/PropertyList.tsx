import PropertyListItem from "./PropertyListItem";

export default function PropertyList() {
  const items = [
    {
      imageUrl: "",
      rentType: "월세",
      price: "1000/70",
      timeRequired: 35,
      address: "서울시 중랑구 신내동 395-15",
      typeInfo: "오피스텔, 3/10층",
      onClick: () => alert("상세 매물 정보 보기"),
    },
    {
      imageUrl: "",
      rentType: "월세",
      price: "1000/70",
      timeRequired: 35,
      address: "서울시 중랑구 신내동 395-15",
      typeInfo: "오피스텔, 3/10층",
      onClick: () => alert("상세 매물 정보 보기"),
    },
  ];
  return (
    <>
      {items.map((item, index) => (
        <PropertyListItem
          key={index}
          imageUrl={item.imageUrl}
          rentType={item.rentType}
          price={item.price}
          timeRequired={item.timeRequired}
          address={item.address}
          typeInfo={item.typeInfo}
          onClick={item.onClick}
        />
      ))}
    </>
  );
}
