import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center">
        <div className="max-w-[380px] w-screen h-screen bg-yellow overflow-y-auto scroll-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
