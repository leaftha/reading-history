import { connectDB } from "@/util/database";
import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";
import NotAuth from "../notauth";
import Link from "next/link";
import List from "./list";
import classes from "./page.module.css";

export default async function Debate() {
  let session = await getServerSession(authOptions);
  if (!session) {
    return <NotAuth />;
  }
  const client = await connectDB;
  const db = client.db("readingHistory");

  let result = await db.collection("debate").find().toArray();

  result = result.map((a) => {
    a._id = a._id.toString();
    return a;
  });

  result = result.reverse();

  return (
    <div className={classes.main}>
      <h1 className={classes.title}>토론 방</h1>
      <div className={classes.content}>
        <Link className={classes.link} href="Debatewriting">
          글 작성
        </Link>
      </div>
      <List result={result} />
    </div>
  );
}
