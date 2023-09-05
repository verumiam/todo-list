import styled from "styled-components";
import {TodoBarButtonTypes} from "../types/TodoBarButtonTypes";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../../shared/redux/store/store";
import {setFilter} from "../../../features/todoList/slices/todosSlice";
import {RootState} from "../../../features/todoList/types/todosSliceTypes";

const TodoBarFilterStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
const TodoBarButtonStyled = styled.button<TodoBarButtonTypes>`
  color: #808080;
  cursor: pointer;
  font-size: 16px;
  margin: 0;
  background: transparent;
  border-radius: 7px;
  padding: 5px 15px;

  ${props => props.active ? `
    border: 1px solid #FF8BD0;
  ` : `
    border: none
  `};

`

export function TodoBarFilter() {
    const dispatch = useDispatch<AppDispatch>();
    const activeFilter = useSelector((state: RootState) => state.todos.filter);

    const handleFilterChange = (filter: 'All' | 'Active' | 'Completed', event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        dispatch(setFilter(filter));
    }

    return (
        <TodoBarFilterStyled>
            <TodoBarButtonStyled
                active={activeFilter === 'All'}
                onClick={(event) => handleFilterChange('All', event)}>
                All
            </TodoBarButtonStyled>
            <TodoBarButtonStyled
                active={activeFilter === 'Active'}
                onClick={(event) => handleFilterChange('Active', event)}>
                Active
            </TodoBarButtonStyled>
            <TodoBarButtonStyled
                active={activeFilter === 'Completed'}
                onClick={(event) => handleFilterChange('Completed', event)}>
                Completed
            </TodoBarButtonStyled>
        </TodoBarFilterStyled>
    );
}


export default TodoBarFilter;