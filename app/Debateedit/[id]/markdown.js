"use client";

import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

export default function Markdown({ result }) {
  const [value, setValue] = useState(result.main);
  return (
    <form action="/api/debate/edit" method="POST">
      <input name="id" defaultValue={result._id} />
      <label>제목</label>
      <input name="title" defaultValue={result.title} />
      <div data-color-mode="light">
        <MDEditor height={200} value={value} onChange={setValue} />
      </div>
      <textarea name="main" value={value} onChange={setValue}></textarea>
      <button type="submit">버튼</button>
    </form>
  );
}
