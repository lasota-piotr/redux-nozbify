const projectsById = (state = {}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.projects,
    };
  }

  return state;
};

export default projectsById;


export const getProjectName = (state, id) => (!!state[id] && state[id].name) || null;
