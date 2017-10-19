import uuidv4 from 'uuid/v4';
import * as api from '../api';

export const requestTodos = filter => ({
  type: 'REQUEST_TODOS',
  filter,
});

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: uuidv4(),
  text,
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id,
});

const receiveTodos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  filter,
  response,
});

export const fetchTodos = filter => (
  api.fetchTodos(filter).then(response =>
    receiveTodos(filter, response),
  )
);
