import { useState } from "react";
import { Form } from "./Form";
import { TodoList } from "./TodoList";
import { Footer } from "./Footer";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalsTodos = todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} totalsTodos={totalsTodos} />
    </div>
  );
};
