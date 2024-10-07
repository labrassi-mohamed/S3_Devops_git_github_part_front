import api from "@/config/axiosConfig";
import { Todo } from "../types/example.type";

// Fetch all todos
export const fetchTodos = async (): Promise<Todo[]> => {
  const { data } = await api.get("/todos");
  return data;
};

// Fetch a single todo by ID
export const fetchTodoById = async (id: number): Promise<Todo> => {
  const { data } = await api.get(`/todos/${id}`);
  return data;
};
