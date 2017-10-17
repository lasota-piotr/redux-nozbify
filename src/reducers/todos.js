import todo from './todo';

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(state, action),
      ];
    case 'TOGGLE_TODO':
      return state.map((todoEl) => {
        if (todoEl.id !== action.id) {
          return todoEl;
        }

        return todo(todoEl, action);
      });
    case 'DELETE_TODO':
      return state.filter(todoEl => todoEl.id !== action.id);
    default:
      return state;
  }
};


// selectors
export const getVisibleTodos = (state, filter) => {
  switch (filter) {
    case 'all':
      return state;
    case 'completed':
      return state.filter(t => t.completed);
    case 'active':
      return state.filter(t => !t.completed);
    default:
      return new Error(`Unknown filter: ${filter}`);
  }
};

export default todos;
