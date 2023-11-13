"use client";
import { useEffect, useState } from "react";
import Modal from "./modal";
import classes from "./list.module.css";

export default function List({ session }) {
  const [data, setData] = useState(null);
  const [isFalse, setIsFalse] = useState(false);
  const [selected, setSelected] = useState("소설");
  const [clicked, setCliked] = useState({});
  const [modal, setModal] = useState(false);

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
    setCliked(item);
  };

  return (
    <div className={classes.main}>
      <select onChange={handleSelect} value={selected}>
        {selectList.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <button onClick={() => setIsFalse(!isFalse)}>검색</button>
      <ul className={classes.list_container}>
        {data
          ? data.map((item, idx) => (
              <li
                className={classes.list}
                key={idx}
                onClick={() => {
                  clickedhandler(item);
                  setModal(true);
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
