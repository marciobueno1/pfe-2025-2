"use client";

import {
  adicionarTarefa,
  atualizarTarefa,
  getTarefas,
  removerTarefa,
} from "@/back4app";
import { Tarefa } from "@/components/Tarefa";
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
  const removerMutation = useMutation({
    mutationFn: removerTarefa,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["tarefas"] });
    },
  });
  const atualizarMutation = useMutation({
    mutationFn: atualizarTarefa,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["tarefas"] });
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

  async function handleDeleteTarefa(objectId) {
    removerMutation.mutate(objectId);
  }

  async function handleAtualizarTarefa(tarefa) {
    atualizarMutation.mutate({
      objectId: tarefa.objectId,
      concluida: !tarefa.concluida,
    });
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
              <Tarefa
                key={t.objectId}
                tarefa={t}
                onDelete={() => handleDeleteTarefa(t.objectId)}
                onChange={() => handleAtualizarTarefa(t)}
              />
            ))}
      </ol>
    </>
  );
}
