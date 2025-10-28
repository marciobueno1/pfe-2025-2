export function Tarefa({ tarefa, onDelete }) {
  return (
    <div
      style={{
        marginBottom: "10px",
        backgroundColor: "#f0f0f0",
        padding: "5px",
      }}
    >
      <li>
        {tarefa.descricao} - {`${tarefa.concluida} `}
        <button onClick={onDelete}>X</button>
      </li>
    </div>
  );
}
