import Button from "./LinkButton";

export default function NoItem() {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="flex text-brown my-[50px] text-lg">
        아쉽지만 매물이 없습니다ㅠ
      </span>
      <Button
        width="w-[100px]"
        font="font-light"
        theme={"primary"}
        navigateTo="/"
      >
        홈으로 이동
      </Button>
    </div>
  );
}
