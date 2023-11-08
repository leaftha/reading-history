"use client";

import { useEffect, useState } from "react";
import Paging from "./pagin";
import Recomment from "./recomment";

export default function Comment({ id, session }) {
  const [comment, setComment] = useState("");
  const [products, setProducts] = useState([]); // 리스트에 나타낼 아이템들
  const [count, setCount] = useState(0); // 아이템 총 개수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지. default 값으로 1
  const [postPerPage] = useState(5); // 한 페이지에 보여질 아이템 수
  const [indexOfLastPost, setIndexOfLastPost] = useState(0); // 현재 페이지의 마지막 아이템 인덱스
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0); // 현재 페이지의 첫번째 아이템 인덱스
  const [currentPosts, setCurrentPosts] = useState(0); // 현재 페이지에서 보여지는 아이템들
  const [isDelete, setIsDelete] = useState(false);

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
    <div>
      <div>댓글목록</div>

      <form action="/api/debate/comment/new" method="POST">
        <input
          name="comment"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <input name="id" defaultValue={id} />
        <button>댓글전송</button>
      </form>

      {currentPosts && products.length > 0 ? (
        currentPosts.map((item, idx) => (
          <div key={idx}>
            <p>
              {item.content} - {item.author}
            </p>

            {item.author === session.user.email ? (
              <form action="/api/debate/comment/delete" method="POST">
                <input name="itemId" defaultValue={item._id} />
                <input name="id" defaultValue={id} />
                <button>삭제</button>
              </form>
            ) : (
              ""
            )}
            <p>대댓글</p>
            <Recomment id={item._id} session={session} />
          </div>
        ))
      ) : (
        <div> No posts.</div>
      )}

      <Paging page={currentPage} count={count} setPage={setPage} />
    </div>
  );
}
