"use client";
import { usePathname } from "next/navigation";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  description: "사용자 맞춤 매물 추천 구해줘, 홈즈!",
  keywords: ["부동산", "집 구하기", "매물 추천"],
  openGraph: {
    title: "구해줘, 홈즈",
    description: "사용자 맞춤 매물 추천 구해줘, 홈즈!",
    url: `${process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO_HOME}`,
    siteName: "구해줘, 홈즈",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO_HOME}/images/system/thumbnail.png`,
        width: 800,
        height: 600,
      },
      {
        url: `${process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO_HOME}/images/system/thumbnail.png`,
        width: 1800,
        height: 1600,
      },
    ],
    locale: "ko",
    type: "website",
  },
  icons: {
    icon: `${process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO_HOME}/images/system/favicon.ico`,
    shortcut: `${process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO_HOME}/images/system/favicon.ico`,
    apple: `${process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO_HOME}/image/systems/favicon.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isResultPage = pathname === "/result";

  return (
    <html lang="ko">
      <body
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
      </body>
    </html>
  );
}
