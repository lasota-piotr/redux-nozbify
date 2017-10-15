import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ id, onTodoClick, completed, text, onDeleteTodoClick }) => {
  const onClickTodo = () => { onTodoClick(id); };
  const onClickDeleteButton = () => { onDeleteTodoClick(id); };
  return (
    <li >
      <span
        onClick={onClickTodo}
        style={{
          textDecoration: completed ? 'line-through' : 'none',
        }}
      >{text}</span>
      <button onClick={onClickDeleteButton}>X</button>
    </li>
  );
};

export default Todo;
