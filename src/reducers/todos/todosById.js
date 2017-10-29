const todosById = (state = {}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.todos,
    };
  }

  return state;
};

export default todosById;


export const getTodo = (state, id) => state[id];
