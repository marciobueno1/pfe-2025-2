import { Avatar } from "./Avatar";

export function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}

// export function Profile2({ myCSSClass = "card", ...otherProps }) {
//   return (
//     <div className={myCSSClass}>
//       <Avatar {...otherProps} />
//     </div>
//   );
// }
