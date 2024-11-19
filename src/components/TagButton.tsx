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
    ? "text-yellow bg-brown-light"
    : "text-brown-light bg-yellow";

  return (
    <button
      className={`w-[100px] h-[41px] rounded-[10px] border border-brown-light ${buttonStyle} text-xs font-light `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
