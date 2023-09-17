import {
  useDeleteTodoMutation,
  useGetTodosQuery,
  useUpdateTodoMutation,
} from "../api/apiSlice";
import TodoForm from "./TodoForm";

export default function TodoList() {
  const { data: todos, isLoading } = useGetTodosQuery();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  if (isLoading) {
    return <p>loading</p>;
  }

  return (
    <>
      <TodoForm />
      <ul>
        {todos?.map((todo) => (
          <li
            className={`${todo.completed ? "dashed" : ""}`}
            onClick={() => updateTodo({ id: todo.id, completed: !todo.completed })}
            key={todo.id}
          >
            {todo.title}{" "}
            <button onClick={() => deleteTodo({ id: todo.id })}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}
