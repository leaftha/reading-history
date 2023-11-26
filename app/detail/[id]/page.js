import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database.js";
import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";
import Markdown from "./markdown";
import Link from "next/link";
import NotAuth from "@/app/notauth";
import classes from "./page.module.css";

export default async function Detail(props) {
  let session = await getServerSession(authOptions);
  if (!session) {
    return <NotAuth />;
  }
  let db = (await connectDB).db("readingHistory");
  let result = await db
    .collection("reviews")
    .findOne({ _id: new ObjectId(props.params.id) });
  result._id = result._id.toString();
  return (
    <div className={classes.main}>
      <h4 className={classes.title}>{result.title}</h4>
      <div className={classes.btnContent}>
        <Link className={classes.btn} href={`/edit/${props.params.id}`}>
          <p className={classes.text}>수정</p>
        </Link>
        <form method="POST" action="/api/post/delete">
          <input
            className={classes.none}
            name="id"
            defaultValue={props.params.id}
          />
          <button className={classes.btn}>삭제</button>
        </form>
      </div>
      <div className={classes.markdown}>
        <Markdown result={result} />
      </div>
    </div>
  );
}
