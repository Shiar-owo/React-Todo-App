import { useState, useRef } from "react";
import styles from "../styles/todo.module.css";

export function Todo({ todo, onToggleComplete, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const inputRef = useRef(null);

  const handleEdit = () => {
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
        <span className={styles.text}>{todo.text}</span>
      )}
      {!isEditing && (
        <button
          className={`${styles.iconBtn} ${styles.editBtn}`}
          onClick={handleEdit}
          aria-label="Editar"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
            <path d="m15 5 4 4" />
          </svg>
        </button>
      )}
      <button
        className={`${styles.iconBtn} ${styles.deleteBtn}`}
        onClick={() => onDelete(todo.id)}
        aria-label="Eliminar"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    </li>
  );
}
