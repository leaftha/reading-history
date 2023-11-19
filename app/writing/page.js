import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";
import Markdown from "./markdown";
import NotAuth from "../notauth";
import classes from "./page.module.css";

export default async function Writing() {
  let session = await getServerSession(authOptions);
  if (!session) {
    return <NotAuth />;
  }
  return (
    <div className={classes.main}>
      <h4 className={classes.title}>글작성</h4>
      <Markdown session={session} />
    </div>
  );
}
