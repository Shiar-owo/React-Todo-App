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

  const toggleComplete = (id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, complete: !t.complete } : t)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const editTodo = (id, newText) => {
    if (!newText.trim()) return;
    setTodos(todos.map((t) => (t.id === id ? { ...t, text: newText } : t)));
  };

  return {
    task,
    setTask,

    todos,
    noTodos,

    addTodo,
    toggleComplete,
    deleteTodo,
    editTodo,
  };
}
