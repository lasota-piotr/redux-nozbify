import { combineReducers } from 'redux';

const createList = (filter) => {
  const handleToggle = (state, action) => {
    const { result: toggleId, entities } = action.response;
    const { completed } = entities.todos[toggleId];
    const shouldRemove =
      (completed && filter === 'active') ||
      (!completed && filter === 'completed');

    return shouldRemove ? state.filter(id => id !== toggleId) : state;
  };

  const handleTogglePriority = (state, action) => {
    const { result: togglePriorityId, entities } = action.response;
    const { priority } = entities.todos[togglePriorityId];
    const shouldRemove = !priority && filter === 'priority';

    return shouldRemove ? state.filter(id => id !== togglePriorityId) : state;
  };

  const handleDelete = (state, action) => {
    const { result: deleteId } = action.response;
    return state.filter(id => id !== deleteId);
  };

  const ids = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_TODOS_SUCCESS':
        return filter === action.filter ? action.response.result : state;
      case 'ADD_TODO_SUCCESS':
        return (filter !== 'completed' && filter !== 'priority')
          ? [...state, action.response.result]
          : state;
      case 'TOGGLE_TODO_SUCCESS':
        return handleToggle(state, action);
      case 'TOGGLE_PRIORITY_SUCCESS':
        return handleTogglePriority(state, action);
      case 'DELETE_TODO_SUCCESS':
        return handleDelete(state, action);
      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {
    if (filter !== action.filter) {
      return state;
    }
    switch (action.type) {
      case 'FETCH_TODOS_REQUEST':
        return true;
      case 'FETCH_TODOS_SUCCESS':
      case 'FETCH_TODOS_FAILURE':
        return false;
      default:
        return state;
    }
  };

  const errorMessage = (state = null, action) => {
    if (filter !== action.filter) {
      return state;
    }

    switch (action.type) {
      case 'FETCH_TODOS_FAILURE':
        return action.message;
      case 'FETCH_TODOS_REQUEST':
      case 'FETCH_TODOS_SUCCESS':
        return null;
      default:
        return state;
    }
  };

  return combineReducers({
    ids,
    isFetching,
    errorMessage,
  });
};

export default createList;

export const getIds = state => state.ids;
export const getIsFetching = state => state.isFetching;
export const getErrorMessage = state => state.errorMessage;