import Header from "@/components/Header";
import PropertyList from "@/components/PropertyList";

export default function page() {
  return (
    <div className="min-h-screen flex flex-col px-[25px]">
      <div className="mt-[100px] mb-[30px]">
        <Header>군포시 재정동 매물</Header>
      </div>
      <PropertyList />
    </div>
  );
}
