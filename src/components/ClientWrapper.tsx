"use client";

import { usePathname } from "next/navigation";

export default function ClientWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isResultPage = pathname === "/detail";

  return (
    <div
      className={`flex ${
        isResultPage
          ? "items-start justify-start"
          : "items-center justify-center"
      }`}
    >
      <div
        className={`${
          isResultPage
            ? "w-full h-screen flex"
            : "w-[380px] h-screen bg-yellow overflow-y-auto"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
