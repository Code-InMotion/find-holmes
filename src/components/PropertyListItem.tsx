import BoxLayout from "./BoxLayout";

interface IPropertyListItem {
  imageUrl: string;
  rentType: string;
  price: string;
  timeRequired: number;
  address: string;
  typeInfo: string;
  onClick: () => void;
}

export default function PropertyListItem({
  // imageUrl,
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
        <div className="w-[40px] h-[40px] mr-[10px] bg-slate-200"></div>
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
