import todo from './todo';

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
    default:
      return state;
  }
};

export default todos;
