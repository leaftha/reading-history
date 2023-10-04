"use client";

import { useEffect, useState } from "react";

export default function Comment({ id, session }) {
  const [comment, setComment] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/api/comment/list?id=${id}`)
      .then((r) => r.json())
      .then((result) => {
        setData(result);
      });
  }, [id]);

  return (
    <div>
      <div>댓글목록</div>
      {data.length > 0
        ? data.map((a, i) => (
            <div key={i}>
              <p>
                {a.content} - {a.author}
              </p>
              {a.author === session.user.email ? (
                <button
                  onClick={() => {
                    console.log(a._id);
                    fetch("/api/comment/delete", {
                      method: "POST",
                      body: JSON.stringify({ id: a._id }),
                    });
                    const newDiaryList = data.filter((it) => it._id !== a._id);
                    setData(newDiaryList);
                  }}
                >
                  삭제
                </button>
              ) : (
                ""
              )}
            </div>
          ))
        : "댓글없음"}
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
          })
            .then((r) => r.json())
            .then((result) => {
              setData([...data, result]);
            });
        }}
      >
        댓글전송
      </button>
    </div>
  );
}
