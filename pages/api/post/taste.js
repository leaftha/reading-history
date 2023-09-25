import { connectDB } from "@/util/database";

export default async function handler(Get, Post) {
  if (Get.method === "POST") {
    let db = (await connectDB).db("readingHistory");
    let taste = [];
    if (typeof Get.body.taste === "object") {
      taste = [...Get.body.taste];
    } else {
      taste = [Get.body.taste];
    }

    await db
      .collection("user_cred")
      .updateOne({ email: Get.body.email }, { $set: { taste: taste } });
    Post.status(200).redirect(302, "/profile");
  }
}
