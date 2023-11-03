import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";
import Markdown from "./markdown";
import NotAuth from "../notauth";

export default async function Writing() {
  let session = await getServerSession(authOptions);
  if (!session) {
    return <NotAuth />;
  }
  return (
    <div>
      <h4>토론 생성</h4>
      <Markdown session={session} />
    </div>
  );
}
