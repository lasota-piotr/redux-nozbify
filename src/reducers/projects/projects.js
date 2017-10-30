import { combineReducers } from 'redux';
import projectsById from './projectsById';

const allIds = (state = [], action) => {
  if (action.response) {
    return [...action.response.result];
  }

  return state;
};

const projects = combineReducers({
  byId: projectsById,
  allIds,
});

export default projects;
