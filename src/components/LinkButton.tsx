import { useRouter } from "next/router";

type ButtonTheme = "primary" | "disabled";

interface IPrimaryButtonProps {
  theme: ButtonTheme;
  isDisabled: boolean;
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  navigateTo?: string;
}

const primary = "bg-subText text-primary";
const disabled = "disabled:bg-subText disabled:text-primary-opacity";

const color: Record<ButtonTheme, string> = {
  primary,
  disabled,
};

export default function Button({
  theme,
  isDisabled,
  children,
  onClick,
  navigateTo,
}: IPrimaryButtonProps) {
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (navigateTo) {
      event.preventDefault(); // 기본 onClick 이벤트 방지
      router.push(navigateTo);
    } else {
      onClick(event); // navigateTo가 없으면 일반 onClick 호출
    }
  };

  return (
    <button
      className={`w-full h-[50px] rounded-[10px] text-xl font-medium  ${disabled} ${color[theme]}`}
      disabled={isDisabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
