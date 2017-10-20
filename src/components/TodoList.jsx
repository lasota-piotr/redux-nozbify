import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick, onDeleteTodoClick, onPriorityClick }) => (
  <ul>
    {todos.map(t => (
      <Todo
        key={t.id}
        {...t}
        onTodoClick={onTodoClick}
        onDeleteTodoClick={onDeleteTodoClick}
        onPriorityClick={onPriorityClick}
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
