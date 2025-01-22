"use client";

import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import classes from "./markdown.module.css";

export default function Markdown({ session }) {
  const [value, setValue] = useState("");
  const [privates, setPrivates] = useState(false);

  return (
    <form className={classes.Form} action="/api/post/writing" method="POST">
      <input
        className={classes.none}
        name="email"
        defaultValue={session.user.email}
        readOnly={true}
      />
      <div className={classes.content}>
        {/* <label className={classes.inputLable}>제목</label> */}
        <input
          placeholder={"제목을 입력하세요."}
          name="title"
          className={classes.inputTitle}
        />
        <div className={classes.line}></div>
        <select
          className={classes.selector}
          onChange={() => {
            setPrivates(!privates);
          }}
          value={privates}
        >
          <option value={false} key="false">
            비공개
          </option>
          <option value={true} key="true">
            공개
          </option>
        </select>
      </div>
      <input
        className={classes.none}
        name="private"
        value={privates}
        readOnly={true}
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
        작성하기
      </button>
    </form>
  );
}
