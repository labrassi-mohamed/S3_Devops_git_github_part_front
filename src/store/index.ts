import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "@/store/slices/exampleSlice";

export const store = configureStore({
  reducer: {
    // This is an example
    todos: todosReducer,
    // Add more reducers here as you build them
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
