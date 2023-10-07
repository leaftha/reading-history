import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database.js";
import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";
import Markdown from "./markdown";
import Link from "next/link";
import NotAuth from "@/app/notauth";

export default async function Detail(props) {
  let session = await getServerSession(authOptions);
  if (!session) {
    return <NotAuth />;
  }
  let db = (await connectDB).db("readingHistory");
  let result = await db
    .collection("reviews")
    .findOne({ _id: new ObjectId(props.params.id) });
  result._id = result._id.toString();
  return (
    <div>
      <h4>상세페이지</h4>
      <Link href={`/edit/${props.params.id}`}>수정</Link>
      <form method="POST" action="/api/post/delete">
        <input name="id" defaultValue={props.params.id} />
        <button>삭제</button>
      </form>
      <h4>{result.title}</h4>
      <Markdown result={result} />
    </div>
  );
}
