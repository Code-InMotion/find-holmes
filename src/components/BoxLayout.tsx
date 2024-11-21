interface IBoxLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function BoxLayout({ children, className }: IBoxLayoutProps) {
  return (
    <div
      className={`w-full h-[70px] border-b border-yellow-light ${className}`}
    >
      {children}
    </div>
  );
}
