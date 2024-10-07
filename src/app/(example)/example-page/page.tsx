"use client";
import { useTodos } from "@/hooks/useExample";

export default function TodosPage() {
  const { todos, loading, error } = useTodos();

  if (loading) {
    return <p>Loading todos...</p>;
  }

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong> -{" "}
            {todo.completed ? "Completed" : "Not completed"}
          </li>
        ))}
      </ul>
    </div>
  );
}
