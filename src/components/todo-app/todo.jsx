export function Todo({ todo }) {
  return <li key={todo.id}>{todo.text}</li>;
}
