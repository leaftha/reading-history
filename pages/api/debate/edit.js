import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    let db = (await connectDB).db("readingHistory");
    await db
      .collection("debate")
      .updateOne(
        { _id: new ObjectId(req.body.id) },
        { $set: { title: req.body.title, main: req.body.main } }
      );
    res.status(200).redirect(302, "/debate");
  }
}
