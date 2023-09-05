import styled from "styled-components";
import TodoListInput from "./components/TodoListInput";
import TodoListItem from "./components/TodoListItem";
import {TodoBottomBar} from "../../widgets";
import {useSelector} from "react-redux";
import {RootState} from "./types/todosSliceTypes";
import FlipMove from "react-flip-move";

const TodoHeaderStyled = styled.h1`
  font-weight: 100;
  font-size: 80px;
  margin-bottom: 15px;
  color: #FF8BD0
`

const TodoListStyled = styled.div`
  display: block;
  text-align: center;
  padding: 60px;
`

const TodoListWrapperStyled = styled.form`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: block;
  margin: 0 auto;
  max-width: 600px;
  width: 600px;
  height: auto;
  background-color: #FFFF;
  min-height: auto;
`


export function TodoList() {
    const todos = useSelector((state: RootState) => state.todos.todos);
    const filter = useSelector((state: RootState) => state.todos.filter);

    const filteredTodos = todos.filter(todo => {
        if (filter === 'Active') return !todo.completed;
        if (filter === 'Completed') return todo.completed;
        return true;
    });

    return (
        <TodoListStyled>
            <TodoHeaderStyled>todos</TodoHeaderStyled>
            <TodoListWrapperStyled>
                <TodoListInput/>
                <FlipMove typeName={null} duration={300} easing="ease-out" enterAnimation="fade" leaveAnimation="fade">
                    {filteredTodos.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
                </FlipMove>
                <TodoBottomBar/>
            </TodoListWrapperStyled>
        </TodoListStyled>
    );
}

export default TodoList;