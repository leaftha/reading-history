import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const db = (await connectDB).db("readingHistory");
  const id = req.query.id * 1;
  let result = await db.collection("comment").find({ itemId: id }).toArray();
  res.status(200).json(result);
}
