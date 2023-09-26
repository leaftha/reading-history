import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";
import Markdown from "./markdown";

export default async function Writing() {
  let session = await getServerSession(authOptions);

  return (
    <div>
      <h4>글작성</h4>
      <form action="/api/post/writing" method="POST">
        <input name="email" defaultValue={session.user.email} />
        <label>제목</label>
        <input name="title" />
        <Markdown />
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
