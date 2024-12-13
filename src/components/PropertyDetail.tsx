import BoxLayout from "./BoxLayout";

interface IPropertyDetailProps {
  label: string;
  value?: string | number;
}

export default function PropertyDetail({ label, value }: IPropertyDetailProps) {
  return (
    <BoxLayout className="flex items-center">
      <span className="w-[150px] text-brown-dark">{label}</span>
      <span className="text-brown-dark font-light">{value}</span>
    </BoxLayout>
  );
}
