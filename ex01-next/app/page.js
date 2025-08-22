//import Image from "next/image";
//import styles from "./page.module.css";

import { Avatar } from "@/components/Avatar";
import { Profile } from "@/components/Profile";
import { TodoList } from "@/components/TodoList";

export default function Home() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <div>
        <Profile
          person={{
            name: "Katsuko Saruhashi",
            imageId: "YfeOqp2",
          }}
        />
        <Profile
          size={80}
          person={{
            name: "Aklilu Lemma",
            imageId: "OKS67lh",
          }}
        />
        <Profile
          size={50}
          person={{
            name: "Lin Lanying",
            imageId: "1bX5QH6",
          }}
        />
      </div>
      <hr />
      <TodoList />
    </section>
  );
}
