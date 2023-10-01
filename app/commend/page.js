import Sample from "./sample";

export default async function Commend() {
  const resposn = await fetch("http://localhost:3000/api/post/aladin");
  console.log(resposn, "asdf");
  return (
    <div>
      <p>책 추천 사이트</p>
      <button>button</button>
    </div>
  );
}
