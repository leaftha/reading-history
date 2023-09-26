import { connectDB } from "@/util/database";
import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Reviews() {
  let session = await getServerSession(authOptions);
  const client = await connectDB;
  const db = client.db("readingHistory");

  let result = await db
    .collection("reviews")
    .find({ email: session.user.email })
    .toArray();

  // console.log(result);

  return (
    <div>
      <Link href="writing">글 작성</Link>
      <p>reviews</p>
      {result.map((item) => (
        <p>{item.review}</p>
      ))}
    </div>
  );
}