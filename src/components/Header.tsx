interface IHeaderProps {
  children: string;
  className?: string;
}

export default function Header({ children, className }: IHeaderProps) {
  return (
    <span className={`flex text-brown-light text-xl ${className}`}>
      {children}
    </span>
  );
}
