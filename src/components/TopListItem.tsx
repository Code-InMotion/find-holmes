interface ITopListItemProps {
  rank: number;
  region: string;
  count: number;
  onClick: () => void;
}

export default function TopListItem({
  rank,
  region,
  count,
  onClick,
}: ITopListItemProps) {
  return (
    <div className="w-full h-[80px] bg-yellow-light rounded-[10px] flex items-center justify-between py-[22px] px-4 mb-[30px]">
      <div className="flex">
        <span className="flex items-center text-brown-light mr-[17px] text-4xl">
          {rank}
        </span>
        <div className="flex flex-col text-brown-dark">
          <span className="text-lg mb-[3px]">{region}</span>
          <span className="font-light text-[10px]">
            {count}개의 매물이 있습니다.
          </span>
        </div>
      </div>
      <button className="text-brown-light text-[10px]" onClick={onClick}>
        보러가기&gt;
      </button>
    </div>
  );
}
