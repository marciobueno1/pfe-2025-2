//import Image from "next/image";
//import styles from "./page.module.css";

import { Avatar } from "@/components/Avatar";
import { Profile } from "@/components/Profile";
import { TodoList } from "@/components/TodoList";

export default function Home() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
      <hr />
      <TodoList />
      <hr />
      <Avatar />
    </section>
  );
}
