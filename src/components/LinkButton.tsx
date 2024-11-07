import { useRouter } from "next/router";

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
    if (navigateTo) {
      event.preventDefault();
      router.push(navigateTo);
    } else {
      onClick(event);
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
