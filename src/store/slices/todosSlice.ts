import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { todos } from "../types/todosType";

interface initialState {
    todos: todos[]
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
const initialTodosState: initialState = {
    todos: []
};

const todosSlice = createSlice({
    name: "todos",
    initialState: initialTodosState,
    reducers: {
        addTodos: (state, action: PayloadAction<todos> ) => {
            state.todos = [...state.todos, action.payload];
        },
        updateTodos: (state, action: PayloadAction<todos>) => {
            const index: number = state.todos.findIndex(item => item.id === action.payload.id);
            state.todos[index].completed =  action.payload.completed;
        },
        deleteTodos: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter((item) => item.id !== action.payload);
        },
        clearCompletedTodos: (state) => {
            state.todos = state.todos.filter(item => item.completed !== true);
        }
    }
});

export const {addTodos, updateTodos, deleteTodos, clearCompletedTodos} = todosSlice.actions;
export default todosSlice.reducer;