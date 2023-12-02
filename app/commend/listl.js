"use client";
import { useEffect, useState } from "react";
import Modal from "./modal";
import classes from "./list.module.css";

export default function List({ session }) {
  const [data, setData] = useState(null);
  const [isFalse, setIsFalse] = useState(false);
  const [selected, setSelected] = useState("소설/시/희곡");
  const [clicked, setCliked] = useState({});
  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetch(
      `https://reading-history.vercel.app/api/post/aladin?category=${selected}&b=2&c=3`
    )
      .then((res) => res.json())
      .then((item) => {
        setData(item.item);
      });
  }, [isFalse]);

  const selectList = ["소설/시/희곡", "과학", "경제", "고전", "사회과학","자기개발"];
  const handleSelect = (e) => {
    if (e.target.value != "") {
      setSelected(e.target.value);
    }
  };

  const clickedhandler = (item) => {
    setCliked(item);
  };

  return (
    <div className={classes.main}>
      <div className={classes.select}>
        <select
          className={classes.selects}
          onChange={handleSelect}
          value={selected}
        >
          {selectList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <button className={classes.btn} onClick={() => setIsFalse(!isFalse)}>
          검색
        </button>
      </div>
      <ul className={classes.list_container}>
        {data
          ? data.map((item, idx) => (
              <li
                className={classes.list}
                key={idx}
                onClick={() => {
                  clickedhandler(item);
                  setModal(true);
                  document.body.style.overflow = "hidden";
                }}
              >
                {idx + 1} - {item.title}
              </li>
            ))
          : ""}
      </ul>
      {modal && <Modal item={clicked} setModal={setModal} session={session} />}
    </div>
  );
}
