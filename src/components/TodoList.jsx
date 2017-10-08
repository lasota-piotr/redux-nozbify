import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {Object.keys(todos).map(todoId => (
      <Todo
        key={todoId}
        id={todoId}
        {...todos[todoId]}
        onTodoClick={onTodoClick}
      />
    ))}
  </ul>
);

export default TodoList;
