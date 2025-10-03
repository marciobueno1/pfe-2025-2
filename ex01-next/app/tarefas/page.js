"use client";

import { adicionarTarefa, getTarefas } from "@/back4app";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";

export default function TarefasPage() {
  const queryClient = useQueryClient();
  const { isFetching, isPending, error, data } = useQuery({
    queryKey: ["tarefas"],
    queryFn: getTarefas,
  });
  const adicionarMutation = useMutation({
    mutationFn: adicionarTarefa,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["tarefas"] });
      setDescricao("");
    },
  });
  const [descricao, setDescricao] = useState("");

  async function handleAdicionarTarefaClick() {
    if (descricao.trim() === "") {
      alert("Descrição inválida");
      return;
    }
    adicionarMutation.mutate(descricao);
  }

  return (
    <>
      <h1>Tarefas</h1>
      <Link href="/">Voltar</Link>
      <hr />
      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={(evt) => setDescricao(evt.target.value)}
      />
      <button onClick={handleAdicionarTarefaClick}>Adicionar Tarefa</button>
      <hr />
      {error && <div>Ocorreu um erro: {error.message}</div>}
      {isFetching && !isPending && <h1>Atualizando...</h1>}
      <ol>
        {isPending
          ? "Carregando..."
          : data.map((t) => (
              <li key={t.objectId}>
                {t.descricao} - {`${t.concluida}`}
              </li>
            ))}
      </ol>
    </>
  );
}
