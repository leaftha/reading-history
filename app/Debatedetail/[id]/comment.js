"use client";

import { useEffect, useState } from "react";
import Paging from "./pagin";
import Recomment from "./recomment";
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
    fetch(`/api/debate/comment/list?id=${id}`)
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
      <div className={classes.title}>댓글목록</div>

      <form
        className={classes.form}
        action="/api/debate/comment/new"
        method="POST"
      >
        <input
          className={classes.input}
          name="comment"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <input className={classes.commentNone} name="id" defaultValue={id} />
        <button className={classes.btn}>댓글전송</button>
      </form>

      {currentPosts && products.length > 0 ? (
        currentPosts.map((item, idx) => (
          <div className={classes.commentContent} key={idx}>
            <div className={classes.comment}>
              <div className={classes.commentsContent}>
                <p className={classes.comments}>
                  {item.author} : {item.content}
                </p>

                {item.author === session.user.email ? (
                  <form action="/api/debate/comment/delete" method="POST">
                    <input
                      className={classes.commentNone}
                      name="itemId"
                      defaultValue={item._id}
                    />
                    <input
                      className={classes.commentNone}
                      name="id"
                      defaultValue={id}
                    />
                    <button className={classes.btn}>삭제</button>
                  </form>
                ) : (
                  ""
                )}
              </div>

              <Recomment id={item._id} session={session} />
            </div>
          </div>
        ))
      ) : (
        <div> No posts.</div>
      )}

      <Paging page={currentPage} count={count} setPage={setPage} />
    </div>
  );
}
