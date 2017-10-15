import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions';
import TodoList from '../components/TodoList';

export const getVisibleTodos = (todos, filter) => {
  const createNewTodos = (acc, id) => ({
    ...acc,
    [id]: {
      ...todos[id],
    },
  });
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return Object.keys(todos)
        .filter(t => todos[t].completed)
        .reduce(createNewTodos, {});
    case 'SHOW_ACTIVE':
      return Object.keys(todos)
        .filter(t => !todos[t].completed)
        .reduce(createNewTodos, {});
    default:
      return todos;
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = dispatch => ({
  onTodoClick(id) {
    dispatch(toggleTodo({ id }));
  },
  onDeleteTodoClick(id) {
    dispatch(deleteTodo({ id }));
  },
});

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
