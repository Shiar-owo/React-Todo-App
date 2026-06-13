import { Todo } from "./todo";
import { useTodo } from "./hooks/use-todo";
import { TodoControllers } from "./todo-controllers";
import styles from "../styles/todo-app.module.css";

export function TodoApp() {
  const { task, setTask, addTodo, todos, noTodos, toggleComplete, deleteTodo, editTodo } = useTodo();

  const completed = todos.filter((t) => t.complete).length;
  const pending = todos.length - completed;

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Aplicacion de tareas</h2>

      <TodoControllers task={task} addTodo={addTodo} setTask={setTask} />

      {noTodos && <p className={styles.emptyState}>No hay tareas</p>}
      {!noTodos && (
        <>
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
          <div className={styles.footer}>
            <span className={`${styles.counter} ${styles.pending}`}>
              <span className={styles.counterDot} />
              Pendientes: <span className={styles.counterValue}>{pending}</span>
            </span>
            <span className={`${styles.counter} ${styles.completed}`}>
              <span className={styles.counterDot} />
              Terminadas: <span className={styles.counterValue}>{completed}</span>
            </span>
          </div>
        </>
      )}
    </div>
  );
}
