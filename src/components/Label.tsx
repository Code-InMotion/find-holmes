interface ILabelProps {
  children: string;
}

export default function Label({ children }: ILabelProps) {
  return <span className="label text-brown-dark text-lg mb-4">{children}</span>;
}
