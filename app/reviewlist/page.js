import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function reviewList() {
  const client = await connectDB;
  const db = client.db("readingHistory");

  let result = await db
    .collection("reviews")
    .find({ private: "true" })
    .toArray();

  return (
    <div>
      <p>리뷰 리스트</p>
      {result.map((item, idx) => (
        <Link key={idx} href={`/detail/${result[idx]._id}`}>
          {item.title}
        </Link>
      ))}
    </div>
  );
}
