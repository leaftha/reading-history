"use client";

import { useEffect, useState } from "react";

export default function Recomment({ id }) {
  const [isInput, setIsInput] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`/api/debate/comment/recomment/list?id=${id}`)
      .then((r) => r.json())
      .then((result) => {
        const reverse = result.reverse();
        setComments(reverse);
      });
  }, []);
  return (
    <div>
      {comments.map((item, idx) => (
        <div key={idx}>{item.content}</div>
      ))}
      <div>
        <button onClick={() => setIsInput(!isInput)}>답글</button>
      </div>
      {isInput ? (
        <div>
          <input
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <button
            onClick={() => {
              fetch("/api/debate/comment/recomment/new", {
                method: "POST",
                body: JSON.stringify({ comment: comment, id: id }),
              })
                .then((r) => r.json())
                .then((result) => {
                  setComments([result, ...comments]);
                });
            }}
          >
            입력
          </button>
        </div>
      ) : (
        ""
      )}
      <p>dd</p>
    </div>
  );
}
