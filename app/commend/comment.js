"use client";

import { useEffect, useState } from "react";
import Paging from "./pagin";
import classes from "./comment.module.css";

export default function Comment({ id, session }) {
  const [comment, setComment] = useState("");
  const [products, setProducts] = useState([]); // 리스트에 나타낼 아이템들
  const [count, setCount] = useState(0); // 아이템 총 개수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지. default 값으로 1
  const [postPerPage] = useState(5); // 한 페이지에 보여질 아이템 수
  const [indexOfLastPost, setIndexOfLastPost] = useState(0); // 현재 페이지의 마지막 아이템 인덱스
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0); // 현재 페이지의 첫번째 아이템 인덱스
  const [currentPosts, setCurrentPosts] = useState(0); // 현재 페이지에서 보여지는 아이템들

  useEffect(() => {
    fetch(`/api/comment/list?id=${id}`)
      .then((r) => r.json())
      .then((result) => {
        const reverse = result.reverse();
        setProducts(reverse);
      });
    setCount(products.length);
    setIndexOfLastPost(currentPage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setCurrentPosts(products.slice(indexOfFirstPost, indexOfLastPost));
  }, [
    id,
    currentPage,
    indexOfLastPost,
    indexOfFirstPost,
    products,
    postPerPage,
  ]);

  const setPage = (error) => {
    setCurrentPage(error);
  };
  return (
    <div className={classes.main}>
      <h1 className={classes.title}>댓글목록</h1>

      <div className={classes.InputForm}>
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
            fetch("/api/comment/new", {
              method: "POST",
              body: JSON.stringify({ comment: comment, id: id }),
            })
              .then((r) => r.json())
              .then((result) => {
                setProducts([result, ...products]);
              });
          }}
        >
          댓글
        </button>
      </div>

      <ul className={classes.lists}>
        {currentPosts && products.length > 0 ? (
          currentPosts.map((item, idx) => (
            <li className={classes.li} key={idx}>
              <p>
                {item.author}: <b>{item.content}</b>
              </p>
              {item.author === session.user.email ? (
                <button
                  className={classes.btn}
                  onClick={() => {
                    fetch("/api/comment/delete", {
                      method: "POST",
                      body: JSON.stringify({ id: item._id }),
                    });
                    const newDiaryList = products.filter(
                      (it) => it._id !== item._id
                    );
                    setProducts(newDiaryList);
                  }}
                >
                  삭제
                </button>
              ) : (
                ""
              )}
            </li>
          ))
        ) : (
          <div> No posts.</div>
        )}
      </ul>

      <Paging page={currentPage} count={count} setPage={setPage} />
    </div>
  );
}
