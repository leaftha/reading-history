import { connectDB } from "@/util/database";
import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";
export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions);
  if (req.method == "POST") {
    if (req.body.comment != "") {
      let comment = {
        content: req.body.comment,
        itemId: req.body.id,
        author: session.user.email,
      };

      let db = (await connectDB).db("readingHistory");
      let result = await db.collection("debate_comment").insertOne(comment);
      res.status(200).redirect(302, `/Debatedetail/${req.body.id}`);
    } else {
      res.status(500).json("빈칸존재");
    }
  }
}
