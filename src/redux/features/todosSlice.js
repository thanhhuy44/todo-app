import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodosList: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodoItem: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { setTodosList, deleteTodoItem } = todosSlice.actions;
export default todosSlice.reducer;
