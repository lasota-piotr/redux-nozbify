import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Star from './Star';
import Check from './Check';

const StyledTodo = styled.li`
  display: flex;
`;

const TodoBodyFooter = styled.div`
  min-height: 12px;
  font-size: 12px;
  color: gray;
`;

const TodoContentItem = styled.div`
  padding-right: 0.5rem;
  
  ${({ full }) => full && css`
     flex-grow: 1;
	`}
`;

const Todo = ({
  id,
  projectName,
  onTodoClick,
  completed,
  priority,
  text,
  onDeleteTodoClick,
  onPriorityClick,
}) => {
  const onClickTodo = () => {
    onTodoClick(id);
  };
  const onClickDeleteButton = () => {
    onDeleteTodoClick(id);
  };
  const onClickPriorityButton = () => {
    onPriorityClick(id);
  };
  return (
    <StyledTodo>
      <TodoContentItem>
        <Check onClickHandle={onClickTodo} isActive={completed} />
      </TodoContentItem>
      <TodoContentItem full>
        <div>{text}</div>
        <TodoBodyFooter>{projectName}</TodoBodyFooter>
      </TodoContentItem>
      <TodoContentItem>
        <Star onClickHandle={onClickPriorityButton} isActive={priority} />
      </TodoContentItem>
      <button onClick={onClickDeleteButton}>X</button>
    </StyledTodo>
  );
};

export default Todo;
