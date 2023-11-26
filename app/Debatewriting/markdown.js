"use client";

import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import classes from "./markdown.module.css";

export default function Markdown({ session }) {
  const [value, setValue] = useState("");

  return (
    <form
      className={classes.content}
      action="/api/debate/writing"
      method="POST"
    >
      <input
        className={classes.none}
        name="email"
        defaultValue={session.user.email}
        readOnly={true}
      />
      <input
        className={classes.inputTitle}
        placeholder="제목을 입력하세요"
        name="title"
      />

      <div className={classes.markdown} data-color-mode="light">
        <MDEditor height={600} value={value} onChange={setValue} />
      </div>
      <textarea
        className={classes.none}
        name="main"
        defaultValue={value}
      ></textarea>
      <button className={classes.btn} type="submit">
        버튼
      </button>
    </form>
  );
}
