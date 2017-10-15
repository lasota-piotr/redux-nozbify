import todo from './todo';
import omit from '../utilities/omit';

const todos = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        ...todo(state, action),
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        ...todo(state, action),
      };
    case 'DELETE_TODO':
      return omit(state, [action.id]);
    default:
      return state;
  }
};

export default todos;
