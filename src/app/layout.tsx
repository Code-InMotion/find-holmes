import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center">
        <div className="max-w-[380px] w-screen h-100% bg-yellow 2xl:h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
