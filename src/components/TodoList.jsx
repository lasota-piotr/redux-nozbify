import React from 'react';
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

export default TodoList;
