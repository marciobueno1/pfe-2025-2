import { v4 as uuidv4 } from "uuid";

export let _pessoas = [];

const gerarPessoas = () => {
  for (let i = 0; i < 10; i += 1) {
    _pessoas.push({ id: uuidv4() });
  }
};

gerarPessoas();

export const pessoas = _pessoas;
