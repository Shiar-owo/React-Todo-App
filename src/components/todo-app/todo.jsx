import { useState, useRef } from "react";
import styles from "./todo.module.css";

export function Todo({ todo, onToggleComplete, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const inputRef = useRef(null);

  const handleDoubleClick = () => {
    setEditText(todo.text);
    setIsEditing(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleSave = () => {
    onEdit(todo.id, editText);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSave();
    if (e.key === "Escape") setIsEditing(false);
  };

  return (
    <li className={`${styles.todoItem} ${todo.complete ? styles.completed : ""}`}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={todo.complete}
        onChange={() => onToggleComplete(todo.id)}
      />
      {isEditing ? (
        <input
          ref={inputRef}
          className={styles.editInput}
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <span className={styles.text} onDoubleClick={handleDoubleClick}>
          {todo.text}
        </span>
      )}
      <button className={styles.deleteBtn} onClick={() => onDelete(todo.id)}>
        ×
      </button>
    </li>
  );
}
