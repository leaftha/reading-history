import { connectDB } from "@/util/database";
import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";
export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions);
  if (req.method == "POST") {
    if (req.body.comment != "") {
      req.body = JSON.parse(req.body);
      let comment = {
        content: req.body.comment,
        itemId: req.body.id,
        author: session.user.email,
      };

      let db = (await connectDB).db("readingHistory");
      let result = await db.collection("debate_comment").insertOne(comment);
      res.status(200).json(comment);
    } else {
      res.status(500).json("빈칸존재");
    }
  }
}
