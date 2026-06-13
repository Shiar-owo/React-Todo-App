import styles from "../styles/todo-controllers.module.css";

export function TodoControllers({ task, setTask, addTodo }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTodo();
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Escribe tu tarea..."
      />
      <button className={styles.button} onClick={addTodo}>+ Agregar</button>
    </div>
  );
}
