import { ObjectId } from "mongodb";
import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";
import { connectDB } from "@/util/database.js";
import classes from "./page.module.css";
import MarkdownEdit from "./markdown";

export default async function Edit(props) {
  let session = await getServerSession(authOptions);
  let db = (await connectDB).db("readingHistory");
  let result = await db
    .collection("debate")
    .findOne({ _id: new ObjectId(props.params.id) });

  if (session.user.email != result.email) {
    return (
      <div className={classes.main}>
        <h1 className={classes.title}>작성자가 아닙니다.</h1>
      </div>
    );
  }

  return (
    <div className={classes.main}>
      <h4 className={classes.title}>글 수정</h4>
      <MarkdownEdit session={session} result={result} />
    </div>
  );
}
