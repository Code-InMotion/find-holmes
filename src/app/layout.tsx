"use client";
import { usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

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
        <div
          className={`${
            isResultPage ? "w-full h-screen flex" : "w-[380px] h-100% bg-yellow"
          }`}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
