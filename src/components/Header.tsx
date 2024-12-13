"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface IHeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: IHeaderProps) {
  const pathname = usePathname();
  const router = useRouter();

  const isResultPage = pathname === "/detail";

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div
      className={isResultPage ? "" : "flex items-center mt-[100px] mb-[30px]"}
    >
      <Image
        src="/images/chevron_left.svg"
        alt="이전으로 이동"
        width={32}
        height={32}
        className="cursor-pointer"
        onClick={handleBackClick}
      />
      <span className={`mx-auto text-brown-light text-xl`}>{children}</span>
    </div>
  );
}
