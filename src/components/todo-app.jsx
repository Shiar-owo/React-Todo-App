import { Todo } from "./todo";
import { useTodo } from "./hooks/use-todo";
import { TodoControllers } from "./todo-controllers";
import styles from "../styles/todo-app.module.css";

export function TodoApp() {
  const { task, setTask, addTodo, todos, noTodos, toggleComplete, deleteTodo, editTodo } = useTodo();

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Aplicacion de tareas</h2>

      <TodoControllers task={task} addTodo={addTodo} setTask={setTask} />

      {noTodos && <p className={styles.emptyState}>No hay tareas</p>}
      {!noTodos && (
        <ul className={styles.list}>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onToggleComplete={toggleComplete}
              onDelete={deleteTodo}
              onEdit={editTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
