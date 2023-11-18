"use client";
import Link from "next/link";
import Paging from "./pagin";
import classes from "./list.module.css";
import { useEffect, useState } from "react";

export default function List({ result }) {
  const [products, setProducts] = useState([...result]); // 리스트에 나타낼 아이템들
  const [count, setCount] = useState(0); // 아이템 총 개수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지. default 값으로 1
  const [postPerPage] = useState(10); // 한 페이지에 보여질 아이템 수
  const [indexOfLastPost, setIndexOfLastPost] = useState(0); // 현재 페이지의 마지막 아이템 인덱스
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0); // 현재 페이지의 첫번째 아이템 인덱스
  const [currentPosts, setCurrentPosts] = useState(0); // 현재 페이지에서 보여지는 아이템들

  useEffect(() => {
    setCount(products.length);
    setIndexOfLastPost(currentPage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setCurrentPosts(products.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentPage, indexOfLastPost, indexOfFirstPost, products, postPerPage]);

  const setPage = (error) => {
    setCurrentPage(error);
  };
  return (
    <div className={classes.main}>
      {currentPosts && products.length > 0 ? (
        currentPosts.map((item, idx) => (
          <Link className={classes.link} key={idx} href={`/detail/${item._id}`}>
            {item.title}
          </Link>
        ))
      ) : (
        <div className={classes.noPost}> No posts.</div>
      )}
      <div className={classes.Paging}>
        <Paging page={currentPage} count={count} setPage={setPage} />
      </div>
    </div>
  );
}
