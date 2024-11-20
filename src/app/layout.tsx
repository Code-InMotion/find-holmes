"use client";
import { usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // /result 페이지일 경우 left-align, 아니면 center-align
  const isResultPage = pathname === "/result";

  return (
    <html lang="en">
      <body
        className={`flex ${
          isResultPage
            ? "items-start justify-start"
            : "items-center justify-center"
        }`}
      >
        <div className="max-w-[380px] w-screen h-screen bg-yellow overflow-y-auto scroll-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
