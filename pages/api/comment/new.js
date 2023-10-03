import { connectDB } from "@/util/database";
import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";
export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions);
  if (req.method == "POST") {
    req.body = JSON.parse(req.body);
    let comment = {
      content: req.body.comment,
      itemId: req.body.id,
      author: session.user.email,
    };

    let db = (await connectDB).db("readingHistory");
    let result = await db.collection("comment").insertOne(comment);
    res.status(200).json("저장완료");
  }
}
