import { Todo } from "./todo";
import { useTodo } from "./hooks/use-todo";
import { TodoControllers } from "./todo-controllers";

export function TodoApp() {
  const { task, setTask, addTodo, todos, noTodos } = useTodo();

  return (
    <div>
      <h2>Aplicacion de tareas</h2>

      <TodoControllers task={task} addTodo={addTodo} setTask={setTask} />

      {noTodos && <p>No hay tareas</p>}
      {!noTodos && (
        <ul>
          {todos.map((todo) => (
            <Todo todo={todo} />
          ))}
        </ul>
      )}
    </div>
  );
}
