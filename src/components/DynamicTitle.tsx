"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function DynamicTitle() {
  const pathname = usePathname(); // 현재 경로 가져오기

  const titleMap: Record<string, string> = {
    "/": "메인",
    "/top-5": "top5",
    "/properties": "매물 목록",
    "/detail": "세부 정보",
  };

  const defaultTitle = "구해줘, 홈즈";
  const pageTitle = `${defaultTitle} | ${titleMap[pathname] || defaultTitle}`;

  useEffect(() => {
    document.title = pageTitle; // 브라우저 타이틀 동적 변경
  }, [pathname, pageTitle]);

  return null; // 렌더링하지 않음
}
