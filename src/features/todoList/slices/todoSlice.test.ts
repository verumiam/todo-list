import todosReducer, {
    addTodo,
    setCompleted,
    removeTodo,
    setFilter
} from './todosSlice';

describe('Todos reducer', () => {

    it('Should handle initial state', () => {
        expect(todosReducer(undefined, { type: '@@init' })).toEqual({
            todos: [],
            filter: 'All'
        });
    });

    it('Should handle addTodo', () => {
        const todo = { id: 1, title: "Test todo", completed: false };
        expect(todosReducer(undefined, addTodo(todo))).toEqual({
            todos: [todo],
            filter: 'All'
        });
    });

    it('Should handle setCompleted', () => {
        const initialState = {
            todos: [{ id: 1, title: "Test todo", completed: false }],
            filter: 'All'
        };
        expect(todosReducer(initialState, setCompleted({ id: 1, completed: true }))).toEqual({
            todos: [{ id: 1, title: "Test todo", completed: true }],
            filter: 'All'
        });
    });

    it('Should handle removeTodo', () => {
        const initialState = {
            todos: [
                { id: 1, title: "Test todo 1", completed: true },
                { id: 2, title: "Test todo 2", completed: false }
            ],
            filter: 'All'
        };
        expect(todosReducer(initialState, removeTodo())).toEqual({
            todos: [{ id: 2, title: "Test todo 2", completed: false }],
            filter: 'All'
        });
    });

    it('Should handle setFilter', () => {
        expect(todosReducer(undefined, setFilter('Active'))).toEqual({
            todos: [],
            filter: 'Active'
        });
    });

});
