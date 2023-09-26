"use client";

import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

export default function Markdown() {
  const [value, setValue] = useState("");
  return (
    <div data-color-mode="light">
      <MDEditor height={200} value={value} onChange={setValue} />
    </div>
  );
}
