export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export interface TodosState {
    todos: Todo[];
    filter: string;
}

export interface TodoListItemProps {
    todo: Todo;
}

export interface RootState {
    todos: TodosState;
}
