"use client";

import MDEditor from "@uiw/react-md-editor";
import { useEffect, useState } from "react";
import classes from "./markdown.module.css";

export default function Markdown({ result }) {
  const [value, setValue] = useState(result.main);
  const [title, setTitle] = useState(result.title);
  function handleChange(e) {
    setTitle(e.target.value);
  }
  return (
    <form action="/api/post/edit" method="POST">
      <input className={classes.none} name="id" defaultValue={result._id} />
      <div className={classes.content}>
        <input
          className={classes.inputTitle}
          name="title"
          value={title}
          onChange={handleChange}
          //   placeholder={result.title}
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
        버튼
      </button>
    </form>
  );
}
