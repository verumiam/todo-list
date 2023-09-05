import styled from "styled-components";
import TodoBarCounter from "./components/TodoBarCounter";
import TodoBarFilter from "./components/TodoBarFilter";
import TodoBarClearButton from "./components/TodoBarClearButton";

const TodoBottomBarStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  max-height: 50px;
  height: 50px;
  justify-content: space-between;
`

export function TodoBottomBar() {
    return (
        <TodoBottomBarStyled>
            <TodoBarCounter/>
            <TodoBarFilter/>
            <TodoBarClearButton/>
        </TodoBottomBarStyled>
    );
}

export default TodoBottomBar;