interface IBoxLayoutProps {
  height?: number;
  paddingY?: number;
  children: React.ReactNode;
}

export default function BoxLayout({
  height,
  paddingY,
  children,
}: IBoxLayoutProps) {
  return (
    <div
      className="w-full border-b border-yellow-light"
      style={{
        height: `${height}px`,
        paddingTop: `${paddingY}px`,
        paddingBottom: `${paddingY}px`,
      }}
    >
      {children}
    </div>
  );
}
