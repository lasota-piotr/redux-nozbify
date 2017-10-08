import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ id, onTodoClick, completed, text }) => {
  const onClick = () => { onTodoClick(id); };
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
      }}
    >
      {text}
    </li>
  );
};

export default Todo;
