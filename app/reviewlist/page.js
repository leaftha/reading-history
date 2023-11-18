import { connectDB } from "@/util/database";
import List from "./list";
import classes from "./page.module.css";

export default async function reviewList() {
  const client = await connectDB;
  const db = client.db("readingHistory");

  let result = await db
    .collection("reviews")
    .find({ private: "true" })
    .toArray();
  result = result.map((a) => {
    a._id = a._id.toString();
    return a;
  });
  return (
    <div className={classes.main}>
      <p className={classes.title}>리뷰 리스트</p>
      <List result={result} />
    </div>
  );
}
