import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const db = (await connectDB).db("readingHistory");
    req.body = JSON.parse(req.body);
    await db.collection("debate_recomment").deleteMany({ itemId: req.body.id });
    await db
      .collection("debate_comment")
      .deleteOne({ _id: new ObjectId(req.body.id) });
    res.status(200).json("성공");
  }
}
