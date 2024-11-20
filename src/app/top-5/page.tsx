import Header from "@/components/Header";
import TopList from "@/components/TopList";

export default function page() {
  return (
    <div className="min-h-screen flex flex-col px-[25px]">
      <div className="mb-[30px]">
        <Header>조건에 맞는 TOP 5</Header>
      </div>
      <TopList />
    </div>
  );
}
