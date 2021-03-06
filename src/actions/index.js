import { normalize } from 'normalizr';
import * as schema from './schema';
import * as api from '../api';
import { getIsFetching } from '../reducers/todos/todos';

export const addTodo = text => dispatch =>
  api.addTodo(text).then((response) => {
    dispatch({
      type: 'ADD_TODO_SUCCESS',
      response: normalize(response, schema.todo),
    });
  });


export const toggleTodo = id => dispatch =>
  api.toggleTodo(id).then((response) => {
    dispatch({
      type: 'TOGGLE_TODO_SUCCESS',
      response: normalize(response, schema.todo),
    });
  });

export const togglePriority = id => dispatch =>
  api.togglePriority(id).then((response) => {
    dispatch({
      type: 'TOGGLE_PRIORITY_SUCCESS',
      response: normalize(response, schema.todo),
    });
  });

export const deleteTodo = id => dispatch =>
  api.deleteTodo(id).then((response) => {
    dispatch({
      type: 'DELETE_TODO_SUCCESS',
      response: normalize(response, schema.todo),
    });
  });

export const fetchTodos = filter => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: 'FETCH_TODOS_REQUEST',
    filter,
  });

  return api.fetchTodos(filter).then(
    (response) => {
      dispatch({
        type: 'FETCH_TODOS_SUCCESS',
        response: normalize(response, schema.arrayOfTodos),
        filter,
      });
    },
    (error) => {
      dispatch({
        type: 'FETCH_TODOS_FAILURE',
        filter,
        message: error.message || 'Something went wrong.',
      });
    },
  );
};

export const fetchProjects = () => (dispatch) => {
  dispatch({
    type: 'FETCH_PROJECTS_REQUEST',
  });

  return api.fetchProjects().then(
    (response) => {
      dispatch({
        type: 'FETCH_PROJECTS_SUCCESS',
        response: normalize(response, schema.arrayOfProjects),
      });
    },
    (error) => {
      dispatch({
        type: 'FETCH_PROJECTS_FAILURE',
        message: error.message || 'Something went wrong.',
      });
    },
  );
};
