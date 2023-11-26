"use client";

import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import classes from "./markdown.module.css";

export default function Markdown({ result }) {
  const [value, setValue] = useState(result.main);
  return (
    <form action="/api/debate/edit" method="POST">
      <input className={classes.none} name="id" defaultValue={result._id} />

      <div className={classes.content}>
        <input
          className={classes.inputTitle}
          name="title"
          defaultValue={result.title}
        />
      </div>
      <div className={classes.markdown} data-color-mode="light">
        <MDEditor height={600} value={value} onChange={setValue} />
      </div>
      <textarea
        className={classes.none}
        name="main"
        value={value}
        onChange={setValue}
      ></textarea>
      <button className={classes.btn} type="submit">
        수정
      </button>
    </form>
  );
}
