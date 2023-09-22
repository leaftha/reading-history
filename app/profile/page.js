import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";
import Taste from "./taste";

export default async function Profile() {
  let session = await getServerSession(authOptions);
  return (
    <div>
      <p>profile</p>
      <p>{session.user.name}</p>
      <p>{session.user.email}</p>
      <Taste session={session} />
    </div>
  );
}
