export function TodoControllers({ task, setTask, addTodo }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTodo();
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Escribe tu tarea..."
      />
      <button onClick={addTodo}>Agregar</button>
    </div>
  );
}
