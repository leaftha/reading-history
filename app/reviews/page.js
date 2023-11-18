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
  result = result.map((a) => {
    a._id = a._id.toString();
    return a;
  });

  return (
    <div className={classes.main}>
      <Link className={classes.wrting} href="writing">
        글 작성
      </Link>
      <Link className={classes.another} href="reviewlist">
        다른 사람 서평들
      </Link>
      <p className={classes.num}>서평 수 : {result.length}</p>
      <p className={classes.listTitle}>reviews</p>
      <List result={result} />
    </div>
  );
}
