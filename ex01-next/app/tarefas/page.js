"use client";

import { adicionarTarefa, getTarefas } from "@/back4app";
import { useState } from "react";

export default function TarefasPage() {
  const [tarefas, setTarefas] = useState([]);
  const [descricao, setDescricao] = useState("");

  async function handleListarTarefasClick() {
    setTarefas(await getTarefas());
  }

  async function handleAdicionarTarefaClick() {
    if (descricao.trim() === "") {
      alert("Descrição inválida");
      return;
    }
    const data = await adicionarTarefa(descricao.trim());
    setDescricao("");
    setTarefas(await getTarefas());
  }

  return (
    <>
      <h1>Tarefas</h1>
      <button onClick={handleListarTarefasClick}>Listar Tarefas</button>
      <hr />
      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={(evt) => setDescricao(evt.target.value)}
      />
      <button onClick={handleAdicionarTarefaClick}>Adicionar Tarefa</button>
      <hr />
      <ol>
        {tarefas.map((t) => (
          <li key={t.objectId}>
            {t.descricao} - {`${t.concluida}`}
          </li>
        ))}
      </ol>
    </>
  );
}
