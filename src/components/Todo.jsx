import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';

const Todo = ({
  id,
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
    <li>
      <Star onClickHandle={onClickPriorityButton} isActive={priority} />
      <span
        onClick={onClickTodo}
        style={{
          textDecoration: completed ? 'line-through' : 'none',
        }}
      >
        {text}{' '}
      </span>

      <button onClick={onClickDeleteButton}>X</button>
    </li>
  );
};

export default Todo;
