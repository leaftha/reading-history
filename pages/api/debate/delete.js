import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    let db = (await connectDB).db("readingHistory");
    await db.collection("debate").deleteOne({ _id: new ObjectId(req.body.id) });
    res.status(200).redirect(302, "/debate");
  }
}
