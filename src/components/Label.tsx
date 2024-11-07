interface ILabelProps {
  children: string;
}

export default function Label({ children }: ILabelProps) {
  return <span className="label text-mainText text-lg mb-4">{children}</span>;
}
