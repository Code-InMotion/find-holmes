import React, { Suspense } from "react";
import DetailContainer from "./components/DetailContainer";

export default function page() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <DetailContainer />
    </Suspense>
  );
}
