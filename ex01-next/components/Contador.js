"use client";

import { useState } from "react";

export const Contador = () => {
  let [contador, setContador] = useState(0);
  const handleClick = () => {
    setContador(contador + 1);
  };
  return (
    <div>
      <h3>{contador}</h3>
      <button onClick={handleClick}>Incrementar</button>
    </div>
  );
};
