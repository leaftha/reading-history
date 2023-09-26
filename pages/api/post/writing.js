import { connectDB } from "@/util/database";

export default async function handler(Get, Post) {
  if (Get.method === "POST") {
    let db = (await connectDB).db("readingHistory");
    console.log(Get.body);
    await db.collection("reviews").insertOne(Get.body);
    Post.status(200).redirect(302, "/reviews");
  }
}
