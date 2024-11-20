import Header from "@/components/Header";
import TopList from "@/components/TopList";

export default function page() {
  return (
    <div className="min-h-screen flex flex-col px-[25px]">
      <Header className="justify-center mt-[100px] mb-[30px]">
        조건에 맞는 TOP 5
      </Header>
      <TopList />
    </div>
  );
}
