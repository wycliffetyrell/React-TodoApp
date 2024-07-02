import { useState } from "react";
import styles from "./form.module.css";

export const Form = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState({ name: "", done: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  };
  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          type="text"
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          placeholder="Enter Todo Item"
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
};
