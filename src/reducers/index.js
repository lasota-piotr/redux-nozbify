import { combineReducers } from 'redux';
import todos from './todos/todos';
import projects from './projects/projects';

const rootReducer = combineReducers({
  todos,
  projects,
});

export default rootReducer;
