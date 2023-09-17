import { useState } from "react";
import { useAddTodosMutation } from "../api/apiSlice";
export default function TodoForm() {
  const [title, setTitle] = useState("");
  const [addTodo] = useAddTodosMutation();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addTodo({title: title, completed: false, userId: 1})
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="new Todo"
      />
      <button>Invia</button>
    </form>
  );
}
