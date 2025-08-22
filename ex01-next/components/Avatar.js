import { getImageUrl } from "./utils";

export function Avatar({ person, size = 100, isSepia, thickBorder }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

// Exemplo de como utilizar "props" como parâmetro
// export function Avatar(props) {
//   const { person, size } = props;
