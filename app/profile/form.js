"use client";
import { useState } from "react";
import classes from "./form.module.css";

export default function Form({ session }) {
  const [selected, setSelected] = useState("소설");
  const [tasteList, setTasteList] = useState([]);
  const selectList = ["소설", "과학", "시사", "시", "자기개발"];

  const handleSelect = (e) => {
    if (e.target.value != "") {
      setSelected(e.target.value);
    }
  };

  const addTasteList = () => {
    if (!tasteList.includes(selected)) {
      setTasteList([selected, ...tasteList]);
    } else {
      alert("이미 추가된 취향");
    }
  };

  return (
    <div className={classes.main}>
      <select
        className={classes.select}
        onChange={handleSelect}
        value={selected}
      >
        {selectList.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <div className={classes.btnMain}>
        <button
          className={classes.btn}
          type="submit"
          onClick={() => {
            addTasteList();
          }}
        >
          추가
        </button>
        <form method="POST" action="/api/post/taste">
          {tasteList.map((item, idx) => (
            <input
              className={classes.none}
              key={idx}
              name="taste"
              type="text"
              defaultValue={tasteList[0]}
            />
          ))}
          <input
            className={classes.none}
            name="email"
            type="text"
            defaultValue={session.user.email}
          />
          <button className={classes.btn} type="submit">
            선택완료
          </button>
        </form>
      </div>
      {tasteList.map((item, idx) => (
        <p key={idx}>{item}</p>
      ))}
    </div>
  );
}
