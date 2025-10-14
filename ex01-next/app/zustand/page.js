"use client";

import { useStore } from "@/zustand";
import Link from "next/link";
import { useState } from "react";

export default function Counter() {
  const { add, clear, count, inc } = useStore();
  const [number, setNumber] = useState(10);
  return (
    <div>
      <h1>Zustand</h1>
      <hr />
      <Link href="/">Voltar</Link>
      <hr />
      <h2>{count}</h2>
      <br />
      <button onClick={inc}>one up</button>
      <button onClick={clear}>clear</button>
      <p>
        <input
          type="number"
          value={number}
          onChange={(evt) => setNumber(Number(evt.target.value))}
        />
        <button onClick={() => add(number)}>add</button>
      </p>
    </div>
  );
}
