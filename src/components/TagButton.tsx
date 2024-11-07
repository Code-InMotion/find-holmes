interface ITagButtonProps {
  children: string;
  isChecked: boolean;
  onClick: () => void;
}

export default function TagButton({
  children,
  isChecked,
  onClick,
}: ITagButtonProps) {
  const buttonStyle = isChecked
    ? "text-primary bg-subText"
    : "text-subText bg-primary";

  return (
    <button
      className={`w-[100px] h-[41px] rounded-[10px] border border-subText ${buttonStyle} text-xs font-light `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
