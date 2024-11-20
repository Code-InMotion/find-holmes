import { useRouter } from "next/navigation";

type ButtonTheme = "primary" | "disabled";

interface IPrimaryButtonProps {
  theme: ButtonTheme;
  isDisabled: boolean;
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  navigateTo?: string;
}

const primary = "bg-brown-light text-yellow";
const disabled = "disabled:bg-brown-light disabled:text-yellow-opacity";

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
    if (isDisabled) {
      event.preventDefault();
      return; // Disabled 상태에서는 아무 동작도 하지 않음
    }
    if (navigateTo) {
      event.preventDefault();
      router.push(navigateTo);
    }
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      className={`w-full h-[50px] rounded-[10px] text-sm font-medium  ${disabled} ${color[theme]}`}
      disabled={isDisabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
