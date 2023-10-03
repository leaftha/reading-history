"use client";

import { useEffect, useState } from "react";

export default function Commend() {
  const [data, setData] = useState(null);
  const [isFalse, setIsFalse] = useState(false);
  const [selected, setSelected] = useState("소설");
  const [clicked, setCliked] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/api/post/aladin?category=${selected}&b=2&c=3`)
      .then((res) => res.json())
      .then((item) => {
        setData(item.item);
      });
  }, [isFalse]);

  const selectList = ["소설", "과학", "시사", "시", "자기개발"];

  const handleSelect = (e) => {
    if (e.target.value != "") {
      setSelected(e.target.value);
    }
  };

  const clickedhandler = (item) => {
    console.log(item);
    // setCliked()
  };

  return (
    <div>
      <p>책 추천 사이트</p>

      <select onChange={handleSelect} value={selected}>
        {selectList.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <button onClick={() => setIsFalse(!isFalse)}>검색</button>
      {data
        ? data.map((item, idx) => (
            <p
              key={idx}
              onClick={() => {
                clickedhandler(item);
              }}
            >
              {item.title}
            </p>
          ))
        : ""}
    </div>
  );
}
