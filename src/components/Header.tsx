interface IHeaderProps {
  children: string;
}

export default function Header({ children }: IHeaderProps) {
  return <span className="text-brown-light text-2xl">{children}</span>;
}
