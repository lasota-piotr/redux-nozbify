import { combineReducers } from 'redux';
import todosById, * as fromTodosById from './todosById';
import * as fromProjectsById from '../projects/projectsById';
import createList, * as fromList from './createList';

const listByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  completed: createList('completed'),
  priority: createList('priority'),
});

const todos = combineReducers({
  byId: todosById,
  listByFilter,
});

export default todos;

// selectors
export const getVisibleTodos = (state, filter) => {
  const ids = fromList.getIds(state.todos.listByFilter[filter]);
  return ids.map(id => fromTodosById.getTodo(state.todos.byId, id))
    .map(todo => ({
      ...todo,
      projectName: fromProjectsById.getProjectName(state.projects.byId, todo.projectId),
    }))
    .map((todo) => {
      console.log(todo);
      return todo;
    });
};

export const getIsFetching = (state, filter) =>
  fromList.getIsFetching(state.todos.listByFilter[filter]);

export const getErrorMessage = (state, filter) =>
  fromList.getErrorMessage(state.todos.listByFilter[filter]);
