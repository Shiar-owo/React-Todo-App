import { useState } from "react";

export function useTodo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const noTodos = todos.length === 0;

  const addTodo = () => {
    if (!task.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: task,
      complete: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  return {
    task,
    setTask,

    todos,
    noTodos,

    addTodo,
  };
}
