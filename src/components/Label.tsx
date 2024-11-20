interface ILabelProps {
  children: string;
}

export default function Label({ children }: ILabelProps) {
  return (
    <span className="block label text-brown-dark text-sm mb-4">{children}</span>
  );
}
