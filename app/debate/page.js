import { connectDB } from "@/util/database";
import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";
import NotAuth from "../notauth";
import Link from "next/link";
import List from "./list";

export default async function Debate() {
  let session = await getServerSession(authOptions);
  if (!session) {
    return <NotAuth />;
  }
  const client = await connectDB;
  const db = client.db("readingHistory");

  let result = await db.collection("debate").find().toArray();

  result = result.map((a) => {
    a._id = a._id.toString();
    return a;
  });

  return (
    <div>
      <Link href="writing">글 작성</Link>
      <Link href="reviewlist">다른 사람 서평들</Link>
      <p>토론방</p>
      <List result={result} />
    </div>
  );
}