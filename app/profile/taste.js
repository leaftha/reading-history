"use client";

import { useState } from "react";
import Form from "./form";

export default function Taste({ session }) {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <p
        onClick={() => {
          setModal(true);
        }}
      >
        책의 취양 추가
      </p>
      {modal && <Form session={session} />}
    </div>
  );
}
