import Image from "next/image";
import BoxLayout from "./BoxLayout";

interface IPropertyListItem {
  rentType: string;
  price: string;
  timeRequired: number;
  address: string;
  typeInfo: string;
  onClick: () => void;
}

export default function PropertyListItem({
  rentType,
  price,
  timeRequired,
  address,
  typeInfo,
  onClick,
}: IPropertyListItem) {
  return (
    <BoxLayout>
      <div
        className="flex py-[19px] text-brown-dark cursor-pointer"
        onClick={onClick}
      >
        <Image
          src="/images/apartment.svg"
          alt=""
          width={40}
          height={40}
          style={{ marginRight: "10px" }}
        />
        <div className="w-full flex flex-col">
          <div className="flex items-center justify-between">
            <span className="text-sm">
              {rentType} {price}
            </span>
            <span className="text-sm">{address}</span>
          </div>
          <div className="flex justify-between font-light text-xs">
            <span>소요시간 {timeRequired}분</span>
            <span>{typeInfo}</span>
          </div>
        </div>
      </div>
    </BoxLayout>
  );
}
