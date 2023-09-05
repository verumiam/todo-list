import styled from "styled-components";
import {TodoListItemStyledProps} from "../types/styledPropsTypes";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../shared/redux/store/store";
import {setCompleted} from "../slices/todosSlice";
import {TodoListItemProps} from "../types/todosSliceTypes";
import React from "react";

const TodoListGroupItemStyled = styled.div`
  display: flex;
  border-top: none;
  border-left: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
  padding: 5px 10px;
  align-items: center;
`

const TodoListItemCheckStyled = styled.input.attrs({type: 'checkbox'})`
  appearance: none;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-radius: 100%;
  min-width: 40px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  position: relative;

  &:checked::before {
    content: "✔";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #00a400;
    font-size: 20px;
  }

  &:checked::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border-radius: 50%;
  }
`;

const TodoListItemStyled = styled.input<TodoListItemStyledProps>`
  display: block;
  height: 60px;
  max-height: 60px;
  width: 100%;
  padding-left: 20px;
  border: none;
  font-size: 28px;
  font-weight: 100;

  &::placeholder {
    color: #808080;
  }

  &:focus {
    outline: none;
  }

  color: ${props => props.completed ? 'rgba(0, 0, 0, 0.15);' : 'black'};
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};

`

type TodoListItemRef = HTMLDivElement;
type TodoListItemForwardedRef = React.ForwardedRef<TodoListItemRef>;


const TodoListItemBase: React.ForwardRefRenderFunction<TodoListItemRef, TodoListItemProps> = (props, ref) => {
    const { todo } = props;
    const dispatch = useDispatch<AppDispatch>()

    const handleToggle = () => {
        dispatch(setCompleted({id: todo.id, completed: !todo.completed}));
    }

    return (
        <TodoListGroupItemStyled ref={ref}>
            <TodoListItemCheckStyled
                type={'checkbox'}
                checked={todo.completed}
                onChange={handleToggle}
            />
            <TodoListItemStyled
                completed={todo.completed}
                value={todo.title}
                readOnly />
        </TodoListGroupItemStyled>
    );
}

const TodoListItem = React.forwardRef(TodoListItemBase);

export default TodoListItem;