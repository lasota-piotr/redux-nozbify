const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case 'TOGGLE_TODO':
      return {
        id: state.id,
        completed: !state.completed,
        text: state.text,
      };
    default:
      return state;
  }
};



export default todo;
