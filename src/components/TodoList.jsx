import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick, onDeleteTodoClick }) => (
  <ul>
    {Object.keys(todos).map(todoId => (
      <Todo
        key={todoId}
        id={todoId}
        {...todos[todoId]}
        onTodoClick={onTodoClick}
        onDeleteTodoClick={onDeleteTodoClick}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ),
  onTodoClick: PropTypes.func.isRequired,
  onDeleteTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
