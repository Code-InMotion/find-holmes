import Header from "@/components/Header";
import TopList from "@/components/TopList";

export default function TopFiveContainer() {
  return (
    <>
      <Header className="justify-center mt-[100px] mb-[30px]">
        조건에 맞는 TOP 5
      </Header>
      <TopList />
    </>
  );
}
