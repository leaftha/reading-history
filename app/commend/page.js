import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";
import List from "./listl";

export default async function Commend() {
  let session = await getServerSession(authOptions);
  if (!session) {
    return <NotAuth />;
  }
  return (
    <div>
      <p>책 추천 사이트</p>
      <List session={session} />
    </div>
  );
}
