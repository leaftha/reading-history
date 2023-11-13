import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";
import NotAuth from "../notauth";
import classes from "./page.module.css";
import List from "./listl";

export default async function Commend() {
  let session = await getServerSession(authOptions);
  if (!session) {
    return <NotAuth />;
  }
  return (
    <div className={classes.main}>
      <h1 className={classes.title}>책 추천 사이트</h1>
      <List session={session} />
    </div>
  );
}
