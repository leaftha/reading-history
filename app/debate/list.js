"use client";
import Link from "next/link";
import Paging from "./pagin";
import { useEffect, useState } from "react";
import classes from "./list.module.css";

export default function List({ result }) {
  const [count, setCount] = useState(0); // 아이템 총 개수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지. default 값으로 1
  const [postPerPage] = useState(25); // 한 페이지에 보여질 아이템 수
  const [indexOfLastPost, setIndexOfLastPost] = useState(0); // 현재 페이지의 마지막 아이템 인덱스
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0); // 현재 페이지의 첫번째 아이템 인덱스
  const [currentPosts, setCurrentPosts] = useState(0); // 현재 페이지에서 보여지는 아이템들

  useEffect(() => {
    setCount(result.length / 2);
    setIndexOfLastPost(currentPage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setCurrentPosts(result.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentPage, indexOfLastPost, indexOfFirstPost, result, postPerPage]);

  const setPage = (error) => {
    setCurrentPage(error);
  };
  return (
    <div className={classes.main}>
      <div className={classes.grid}>
        {currentPosts && result.length > 0 ? (
          currentPosts.map((item, idx) => (
            <div className={classes.item} key={idx}>
              <Link className={classes.link} href={`/Debatedetail/${item._id}`}>
                토론 방 {idx + 1} <hr />
                {item.title}
              </Link>
            </div>
          ))
        ) : (
          <div> No posts.</div>
        )}
      </div>
      <Paging page={currentPage} count={count} setPage={setPage} />
    </div>
  );
}
