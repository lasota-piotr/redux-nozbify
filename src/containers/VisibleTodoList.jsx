import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

const getVisibileTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return Object.keys(todos)
        .filter(t => todos[t].completed)
        .map((t) => {
          console.log(todos[t]);
          return t;
        })
        .reduce((acc, id) => ({
          ...acc,
          id: {
            ...todos[id],
          },
        }), {});
    case 'SHOW_ACTIVE':
      return Object.keys(todos)
        .filter(t => !todos[t].completed)
        .map((t) => {
          console.log(todos[t]);
          return t;
        })
        .reduce((acc, id) => ({
          ...acc,
          id: {
            ...todos[id],
          },
        }), {});
    default:
      return todos;
  }
};

const mapStateToProps = state => ({
  todos: getVisibileTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = dispatch => ({
  onTodoClick(id) {
    dispatch(toggleTodo({ id }));
  },
});

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
