"use client";
import { useState } from "react";
import Form from "./form";

export default function Taste({ session }) {
  const [modal, setModal] = useState(false);
  console.log(modal);
  return (
    <div>
      {session.taste ? session.taste : "현재 없음"}
      <p
        onClick={() => {
          setModal(true);
        }}
      >
        책의 취양 추가
      </p>
      {modal && <Form />}
    </div>
  );
}
