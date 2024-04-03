/**
 * Prikaze seznam todojev v tabeli z dvema stolpcema.
 * V props prejme seznam todojev.
 * Primer uporabe:
 * <ShowTodos todos={todos} />
 */

import { Todo } from "./Todo";

export function ShowTodos(props) {
  const { todos } = props;
  // todos = ["task1", "task2"]
  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo}></Todo>
      ))}
    </div>
  );
}
