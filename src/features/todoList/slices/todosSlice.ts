import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Todo, TodosState} from '../types/todosSliceTypes';

const initialState: TodosState = {
    todos: [],
    filter: 'All'
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload);
        },
        setCompleted: (state, action: PayloadAction<{ id: number; completed: boolean }>) => {
            const todoItem = state.todos.find(item => item.id === action.payload.id);
            if (todoItem) {
                todoItem.completed = action.payload.completed;
            }
        },
        removeTodo: (state) => {
            state.todos = state.todos.filter(todo => !todo.completed);
        },
        setFilter: (state, action: PayloadAction<'All' | 'Active' | 'Completed'>) => {
            state.filter = action.payload;
        }
    }
});

export const {
    addTodo,
    removeTodo,
    setCompleted,
    setFilter
} = todosSlice.actions;

export default todosSlice.reducer;
