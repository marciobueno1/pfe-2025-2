const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

export function TodoList() {
  const name = "Hedy Lamarr";
  const photo = "https://i.imgur.com/yXOvdOSs.jpg";
  return (
    <>
      <h1>
        {name}'s Todos for {formatDate(today)}
      </h1>
      <img src={photo} alt={name} className="photo" />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}
