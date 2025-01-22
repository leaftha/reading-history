import classes from "./page.module.css";

export default async function Home() {
  return (
    <div className={classes.main}>
      <div>
        <h1 className={classes.title}>독서 기록 사이트</h1>
      </div>

      <div className={classes.grid}>
        <div>
          <h2>이 사이트에서 자신이 읽은 책의 내용을 기록하세요</h2>
        </div>
        <div>
          <div>다른 사람에게 서평을 공개해서 책을 추천해 주세요</div>
        </div>
        <div>
          <div>
            알라딘 api를 활용하여 자신이 관심있는 분야의 책을 추천받고 댓글을
            써보세요
          </div>
        </div>
        <div>
          <div>토론방을 개설해서 책에 대해 다른 사람들의 의견을 들으세요</div>
        </div>
      </div>
    </div>
  );
}
