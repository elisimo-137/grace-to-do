/**
 * Prikaze iskaznico todo.
 * V props prejme todo objekt.
 *
 * Primer uporabe:
 * <Todo todo={todo} />
 */

import { ShowTodos } from "./ShowTodos";

export function Todo(props) {
  const { todo } = props;

  return <div>{todo}</div>;
}
