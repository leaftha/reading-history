"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import classes from "./login.module.css";

export default function Login({ session }) {
  return (
    <div className={classes.main}>
      {session ? (
        <button className={classes.btn} onClick={() => signOut()}>
          로그아웃버튼
        </button>
      ) : (
        <div>
          <button className={classes.btn} onClick={() => signIn()}>
            로그인버튼
          </button>
          <Link className={classes.btn} href="/register">
            회원가입
          </Link>
        </div>
      )}
    </div>
  );
}
