import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const db = (await connectDB).db("readingHistory");
    await db
      .collection("debate_recomment")
      .deleteMany({ itemId: req.body.itemId });
    await db
      .collection("debate_comment")
      .deleteOne({ _id: new ObjectId(req.body.itemId) });
    res.status(200).redirect(302, `/Debatedetail/${req.body.id}`);
  }
}
