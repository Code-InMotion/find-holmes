import Image from "next/image";
import BoxLayout from "./BoxLayout";

interface IPropertyListItem {
  tradeType: string;
  price: number;
  rentPrice?: number;
  travelTime: number;
  address: string;
  houseType: string;
  floor: number;
  onClick: () => void;
}

export default function PropertyListItem({
  tradeType,
  price,
  rentPrice,
  travelTime,
  address,
  houseType,
  floor,
  onClick,
}: IPropertyListItem) {
  return (
    <BoxLayout className="flex items-center">
      <div
        className="flex items-center w-full text-brown-dark cursor-pointer"
        onClick={onClick}
      >
        <Image
          src="/images/apartment.svg"
          alt=""
          width={40}
          height={40}
          style={{ marginRight: "10px" }}
        />
        <div className="flex flex-col w-full">
          <div className="flex justify-between">
            <span className="text-sm">
              {tradeType} {price}
              {rentPrice ? `/${rentPrice}` : ""}
            </span>
            <span className="text-sm">{address}번지</span>
          </div>
          <div className="flex justify-between font-light text-xs mt-2">
            <span>소요시간 {travelTime}분</span>
            <span>
              {houseType}, {floor}층
            </span>
          </div>
        </div>
      </div>
    </BoxLayout>
  );
}
