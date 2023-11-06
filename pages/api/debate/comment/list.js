import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  const db = (await connectDB).db("readingHistory");
  const id = req.query.id;
  let result = await db
    .collection("debate_comment")
    .find({ itemId: id })
    .toArray();
  res.status(200).json(result);
}
