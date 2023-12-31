import { connectDB } from "@/util/database";
import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";
import Link from "next/link";
import NotAuth from "../notauth";
import List from "./list";
import classes from "./page.module.css";

export default async function Reviews() {
  let session = await getServerSession(authOptions);
  if (!session) {
    return <NotAuth />;
  }
  const client = await connectDB;
  const db = client.db("readingHistory");

  let result = await db
    .collection("reviews")
    .find({ email: session.user.email })
    .toArray();
  result.map((e) => {
    e._id = e._id.toString();
  });

  result = result.reverse();

  return (
    <div className={classes.main}>
      <div className={classes.btnlist}>
        <Link className={classes.btn} href="writing">
          글 작성
        </Link>
        <Link className={classes.btn} href="reviewlist">
          다른 사람 서평들
        </Link>
      </div>
      <p className={classes.num}>서평 수 : {result.length}</p>
      <p className={classes.listTitle}>reviews</p>
      <List result={result} />
    </div>
  );
}
