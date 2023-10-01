import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method === "POST") {
    let db = (await connectDB).db("readingHistory");
    await db.collection("reviews").insertOne(req.body);
    res.status(200).redirect(302, "/reviews");
  }
}
