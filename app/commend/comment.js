"use client";

import { useState } from "react";

export default function Comment({ id }) {
  const [comment, setComment] = useState("");

  console.log(id);
  return (
    <div>
      <div>댓글목록</div>
      <input
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fetch("/api/comment/new", {
            method: "POST",
            body: JSON.stringify({ comment: comment, id: id }),
          });
        }}
      >
        댓글전송
      </button>
    </div>
  );
}
