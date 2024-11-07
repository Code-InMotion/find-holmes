import { useState } from "react";
import { useRouter } from "next/router";

type ButtonTheme = "filled" | "outlined" | "full";

interface IPrimaryButtonProps {
  initialTheme: ButtonTheme;
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  navigateTo?: string;
}

const baseStyle = "flex justify-center items-center rounded-[10px]";

const smallStyle = "w-[100px] h-[41px] text-xs font-light";
const filled = `${baseStyle} ${smallStyle} bg-subText text-primary`;
const outlined = `${baseStyle} ${smallStyle} bg-primary text-subText border border-subText`;
const full = `${baseStyle} w-full h-[50px] bg-subText text-primary text-xl font-medium`;

const style: Record<ButtonTheme, string> = {
  filled,
  outlined,
  full,
};

export default function Button({
  initialTheme,
  children,
  onClick,
  navigateTo,
}: IPrimaryButtonProps) {
  const [theme, setTheme] = useState<ButtonTheme>(initialTheme);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (navigateTo) {
      router.push(navigateTo);
    } else {
      setTheme(prevTheme => (prevTheme === "filled" ? "outlined" : "filled"));
      if (onClick) onClick(event);
    }
  };

  return (
    <button onClick={handleClick} className={style[theme]}>
      {children}
    </button>
  );
}
