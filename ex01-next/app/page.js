//import Image from "next/image";
//import styles from "./page.module.css";

import { Contador } from "@/components/Contador";
import { GeradorAleatorio } from "@/components/GeradorAleatorio";
import { Profile } from "@/components/Profile";
import { TodoList } from "@/components/TodoList";
import { pessoas } from "@/data";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <Link href="/tarefas">Tarefas</Link>
      <hr />
      <Link href="/form">Form</Link>
      <br />
      <GeradorAleatorio />
      <hr />
      <Contador />
      <hr />
      <Contador />
      <hr />
      <ol>
        {pessoas.map((p) => (
          <li key={p.id}>{p.id}</li>
        ))}
      </ol>
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
