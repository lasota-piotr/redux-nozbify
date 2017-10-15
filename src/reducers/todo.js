const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        [action.id]: {
          text: action.text,
          completed: false,
        },
      };
    case 'TOGGLE_TODO':
      return {
        [action.id]: {
          ...state[action.id],
          completed: !state[action.id].completed,
        },
      };
    default:
      return {};
  }
};

export default todo;
