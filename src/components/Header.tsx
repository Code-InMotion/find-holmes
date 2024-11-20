interface IHeaderProps {
  children: string;
}

export default function Header({ children }: IHeaderProps) {
  return (
    <span className="flex justify-center mt-[100px] text-brown-light text-xl">
      {children}
    </span>
  );
}
