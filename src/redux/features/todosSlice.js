import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  isLogin: false,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
      localStorage.setItem("isLogin", action.payload);
    },
    setTodosList: (state, action) => {
      state.todos = [...state.todos, action.payload];
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodoItem: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    setTodoLater: (state, action) => {
      let todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      state.todos[todoIndex].isPause = true;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    setTodoCompleted: (state, action) => {
      let todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      state.todos[todoIndex].isPause = true;
      state.todos[todoIndex].isDone = true;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    resetTodos: (state, action) => {
      state.todos = [];
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const {
  setIsLogin,
  setTodosList,
  deleteTodoItem,
  setTodoLater,
  setTodoCompleted,
  resetTodos,
} = todosSlice.actions;
export default todosSlice.reducer;
