"use client";

import MDEditor from "@uiw/react-md-editor";

export default function Markdown({ result }) {
  return (
    <div
      className="markdownDiv"
      data-color-mode="light"
      style={{ padding: 30 }}
    >
      <MDEditor.Markdown style={{ padding: 30 }} source={result.main} />
    </div>
  );
}
