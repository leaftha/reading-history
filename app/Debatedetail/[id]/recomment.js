"use client";

import { useEffect, useState } from "react";
import classes from "./recomment.module.css";

export default function Recomment({ id, session }) {
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
    <div className={classes.main}>
      <h1 className={classes.title}>대댓글</h1>
      <div className={classes.line}></div>
      {comments.map((item, idx) => (
        <div className={classes.recoment} key={idx}>
          <p className={classes.content}>
            {item.content} - {item.author}
          </p>
          {item.author === session.user.email ? (
            <button
              className={classes.btn}
              onClick={() => {
                fetch("/api/debate/comment/recomment/delete", {
                  method: "POST",
                  body: JSON.stringify({ id: item._id }),
                });
                const newDiaryList = comments.filter(
                  (it) => it._id !== item._id
                );
                setComments(newDiaryList);
              }}
            >
              삭제
            </button>
          ) : (
            ""
          )}
        </div>
      ))}
      <div className={classes.recomentBtn}>
        <button className={classes.btn} onClick={() => setIsInput(!isInput)}>
          답글
        </button>
      </div>
      {isInput ? (
        <div className={classes.inputContent}>
          <input
            className={classes.input}
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <button
            className={classes.btn}
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
    </div>
  );
}
