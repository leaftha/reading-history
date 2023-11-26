import { connectDB } from "@/util/database";
import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";
import Taste from "./taste";
import NotAuth from "../notauth";
import DeleteUser from "./deleteUser";
import classes from "./page.module.css";

export default async function Profile() {
  let session = await getServerSession(authOptions);
  if (!session) {
    return <NotAuth />;
  }
  const client = await connectDB;
  const db = client.db("readingHistory");

  let result = await db
    .collection("user_cred")
    .find({ email: session.user.email })
    .toArray();

  let reviews = await db
    .collection("reviews")
    .find({ email: session.user.email })
    .toArray();
  let tier = "";

  if (reviews.length < 10) {
    tier = "뽀시래기";
  } else if (reviews.length < 20) {
    tier = "갱얼쥐";
  } else if (reviews.length < 30) {
    tier = "지식인";
  } else if (reviews.length < 40) {
    tier = "도서왕";
  } else {
    tier = "독서 신";
  }

  let tastes;
  if (result[0].taste) {
    tastes = [...result[0].taste];
  } else {
    tastes = [];
  }

  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <h1 className={classes.title}>프로필</h1>

        <div className={classes.contentProps}>
          <DeleteUser session={session} />
          <Taste session={session} />
        </div>
      </div>
      <div className={classes.content2}>
        <p>닉네임: {session.user.name}</p>
        <p>이메일: {session.user.email}</p>
        <p>서평 수: {reviews.length}</p>
        <p>계급: {tier}</p>
        <div>
          <h1 className={classes.tasteTitle}>현재 취양</h1>
          <ul className={classes.tasteUl}>
            {tastes
              ? tastes.map((item, idx) => (
                  <li className={classes.lists} key={idx}>
                    {item}
                  </li>
                ))
              : "현재 없음"}
          </ul>
        </div>
      </div>
    </div>
  );
}
