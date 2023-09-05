import styled from "styled-components";
import {useSelector} from "react-redux";
import {RootState} from "../../../features/todoList/types/todosSliceTypes";

const TodoBarCounterStyled = styled.div`
  color: #808080;
`

export function TodoBarCounter() {
    const todos = useSelector((state: RootState) => state.todos.todos);

    return (
        <TodoBarCounterStyled>
            <span>{todos?.length}</span> items left
        </TodoBarCounterStyled>
    );
}

export default TodoBarCounter;