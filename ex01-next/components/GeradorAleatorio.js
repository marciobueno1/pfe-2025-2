"use client";

import { useState } from "react";

export const GeradorAleatorio = () => {
  let [contador, setContador] = useState(1);
  const handleClick = () => {
    setContador(contador + 1);
  };
  return (
    <div>
      <h3>{Math.trunc(Math.random() * 6) + 1}</h3>
      <p>Você já gerou {contador} número(s) aleatório(s).</p>
      <button onClick={handleClick}>Gerar Número Aleatório</button>
    </div>
  );
};
