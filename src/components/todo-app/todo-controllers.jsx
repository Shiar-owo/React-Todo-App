export function TodoControllers({ task, setTask, addTodo }) {
  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Escribe tu tarea..."
      />
      <button onClick={addTodo}>Agregar</button>
    </div>
  );
}
