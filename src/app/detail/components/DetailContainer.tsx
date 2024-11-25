import Header from "@/components/Header";
import PropertyList from "@/components/PropertyList";

export default function DetailContainer() {
  return (
    <div className="min-h-screen flex flex-col px-[25px]">
      <Header className="justify-center mt-[100px] mb-[30px]">
        군포시 재정동
      </Header>
      <PropertyList />
    </div>
  );
}
