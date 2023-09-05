import styled from "styled-components";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../shared/redux/store/store";
import {addTodo} from "../slices/todosSlice";

const TodoListInputWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  border-top: none;
  border-left: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
  height: 70px;
  padding: 5px 10px;
  max-height: 70px;

  svg {
    width: 40px;
    height: 40px;
    cursor: pointer;
    color: #808080;
  }
`

const TodoListInputStyled = styled.input`
  display: block;
  width: 100%;
  padding-left: 20px;
  font-style: italic;
  font-size: 32px;
  font-weight: 100;
  border: none;

  &::placeholder {
    color: #808080;
  }

  &:focus {
    outline: none;
  }
`

export function TodoListInput() {
    const dispatch = useDispatch<AppDispatch>()

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (event.currentTarget.value.trim()) {
                dispatch(addTodo({id: Date.now(), title: event.currentTarget.value, completed: false}));
                event.currentTarget.value = '';
            }
        }
    }


    return (
        <TodoListInputWrapperStyled>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
            </svg>
            <TodoListInputStyled placeholder={`What's need to be done`} onKeyDown={handleKeyDown}/>
        </TodoListInputWrapperStyled>
    );
}

export default TodoListInput;