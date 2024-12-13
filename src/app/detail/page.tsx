import { Suspense } from "react";
import ResultContainer from "./components/ResultContainer";

export default function Page() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <div className="flex w-full h-screen">
        <ResultContainer />
      </div>
    </Suspense>
  );
}
