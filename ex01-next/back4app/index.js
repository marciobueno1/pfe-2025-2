import axios from "axios";

export async function getTarefas() {
  const response = await axios.get(
    "https://parseapi.back4app.com/classes/Tarefa",
    {
      headers: {
        "X-Parse-Application-Id": "jnYc2snzzFZes5yr1TnS2l0ny7nB1Fyvlj8bq9wZ",
        "X-Parse-JavaScript-Key": "iDYRd5O3Z2SnyfafWPneaqHiztKFSxFISMGqoBIY",
      },
    }
  );
  return response.data.results;
}

export async function adicionarTarefa(descricao) {
  const response = await axios.post(
    "https://parseapi.back4app.com/classes/Tarefa",
    {
      descricao,
    },
    {
      headers: {
        "X-Parse-Application-Id": "jnYc2snzzFZes5yr1TnS2l0ny7nB1Fyvlj8bq9wZ",
        "X-Parse-JavaScript-Key": "iDYRd5O3Z2SnyfafWPneaqHiztKFSxFISMGqoBIY",
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
}
