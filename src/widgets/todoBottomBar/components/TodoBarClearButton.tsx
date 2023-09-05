import styled from "styled-components";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../shared/redux/store/store";
import {removeTodo} from "../../../features/todoList/slices/todosSlice";

const TodoBarClearBtnStyled = styled.button`
  background: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
  padding: 5px 10px;
  color: #808080;
`

export function TodoBarClearButton() {
    const dispatch = useDispatch<AppDispatch>()

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        dispatch(removeTodo())
    }

    return (
        <TodoBarClearBtnStyled onClick={(event) => handleClick(event)}>
            Clear completed
        </TodoBarClearBtnStyled>
    );
}

export default TodoBarClearButton;