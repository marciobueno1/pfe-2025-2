import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://parseapi.back4app.com", // Base URL for all requests made with this instance
  timeout: 5000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-Parse-Application-Id": "jnYc2snzzFZes5yr1TnS2l0ny7nB1Fyvlj8bq9wZ",
    "X-Parse-JavaScript-Key": "iDYRd5O3Z2SnyfafWPneaqHiztKFSxFISMGqoBIY",
  },
});

export async function getTarefas() {
  const response = await apiInstance.get("/classes/Tarefa");
  return response.data.results;
}

export async function adicionarTarefa(descricao) {
  const response = await apiInstance.post("/classes/Tarefa", {
    descricao,
  });
  return response.data;
}

export async function removerTarefa(objectId) {
  const response = await apiInstance.delete(`/classes/Tarefa/${objectId}`);
  return response.data;
}
