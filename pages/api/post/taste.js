import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method === "POST") {
    let db = (await connectDB).db("readingHistory");
    let taste = [];
    if (typeof req.body.taste === "object") {
      taste = [...req.body.taste];
    } else {
      taste = [req.body.taste];
    }

    await db
      .collection("user_cred")
      .updateOne({ email: req.body.email }, { $set: { taste: taste } });
    res.status(200).redirect(302, "/profile");
  }
}
