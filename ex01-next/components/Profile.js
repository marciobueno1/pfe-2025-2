import { Avatar } from "./Avatar";
import { Card } from "./Card";

export function Profile(props) {
  return (
    <Card>
      <Avatar {...props} />
    </Card>
  );
}

// export function Profile2({ myCSSClass = "card", ...otherProps }) {
//   return (
//     <div className={myCSSClass}>
//       <Avatar {...otherProps} />
//     </div>
//   );
// }
