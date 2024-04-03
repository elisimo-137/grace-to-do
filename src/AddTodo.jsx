/**
 * Prikaze form za dodajanje novega todoja.
 * V props prejme funkcijo, ki jo poklice ob dodajanju novega todoja.
 * Primer uporabe:
 * <AddTodo onAddTodo={onAddTodo} />
 */
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function AddTodo(props) {
  const { onAddTodo } = props;

  const [title, setTitle] = useState("");
  function onSubmit() {
    if (title.length === 0) return;
    console.log(title);

    onAddTodo(title);
  }

  return (
    <div>
      <Input
        value={title}
        placeholder="vnesi todo"
        onChange={(e) => setTitle(e.target.value)}
      ></Input>
      <Button onClick={onSubmit}>Sumbit</Button>
    </div>
  );
}
