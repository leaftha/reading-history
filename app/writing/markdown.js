"use client";

import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

export default function Markdown({ session }) {
  const [value, setValue] = useState("");
  const [privates, setPrivates] = useState(false);
  const [privateValue, setPrivateValue] = useState(`${privates}`);
  return (
    <form action="/api/post/writing" method="POST">
      <input name="email" defaultValue={session.user.email} />
      <label>제목</label>
      <input name="title" />
      <select
        onChange={() => {
          setPrivateValue(!privates);
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
      <input name="private" defaultValue={privateValue} />

      <div data-color-mode="light">
        <MDEditor height={200} value={value} onChange={setValue} />
      </div>
      <textarea name="main" defaultValue={value}></textarea>
      <button type="submit">버튼</button>
    </form>
  );
}
