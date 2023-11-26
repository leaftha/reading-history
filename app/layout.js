import Link from "next/link";
import "./globals.css";
import Login from "./login";
import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";
import { Inter } from "next/font/google";
import "./reset.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reading History",
  description: "reading History app",
};

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <nav className="navbar">
          <Link className="link" href="/">
            홈
          </Link>
          <Link className="link" href="/reviews">
            서평
          </Link>
          <Link className="link" href="/commend">
            추천 도서
          </Link>

          <Link className="link" href="/debate">
            토론
          </Link>
          <Link className="link" href="/profile">
            프로필
          </Link>
          <Login session={session} />
        </nav>
        {children}
      </body>
    </html>
  );
}
