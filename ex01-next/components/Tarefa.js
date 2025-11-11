export function Tarefa({ tarefa, onDelete, onChange }) {
  return (
    <div
      style={{
        marginBottom: "10px",
        backgroundColor: tarefa.concluida ? "PaleGreen" : "LightSalmon",
        padding: "5px",
      }}
    >
      <li>
        {tarefa.descricao}
        <input type="checkbox" checked={tarefa.concluida} onChange={onChange} />
        <button onClick={onDelete}>X</button>
      </li>
    </div>
  );
}
