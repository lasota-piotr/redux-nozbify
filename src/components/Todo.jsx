import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';
import Check from './Check';

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
    <li>
      <Check onClickHandle={onClickTodo} isActive={completed} />
      <span>
        {text}{' '}{projectName}
      </span>
      <Star onClickHandle={onClickPriorityButton} isActive={priority} />
      <button onClick={onClickDeleteButton}>X</button>
    </li>
  );
};

export default Todo;
