"use client";

import { useEffect, useState } from "react";

export default function Commend() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/api/post/aladin")
      .then((res) => res.json())
      .then((item) => {
        setData(item);
      });
  }, []);

  console.log(data);
  return (
    <div>
      <p>책 추천 사이트</p>
      <button>button</button>
    </div>
  );
}
