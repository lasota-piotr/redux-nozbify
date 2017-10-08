export const addTodo = ({ text }) => {
  const getRandomId = () =>
    Math.random()
      .toString(36)
      .substr(2, 10);
  return {
    type: 'ADD_TODO',
    id: getRandomId(),
    text,
  };
};

export const toggleTodo = ({ id }) => ({
  type: 'TOGGLE_TODO',
  id,
});

export const setVisibilityFilter = ({ filter }) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});
