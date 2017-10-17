import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleTodo, deleteTodo } from '../actions';
import TodoList from '../components/TodoList';
import { getVisibleTodos } from '../reducers/todoApp';


const mapStateToProps = (state, { match }) => ({
  todos: getVisibleTodos(state, match.params.filter || 'all'),
});

const VisibleTodoList = withRouter(
  connect(mapStateToProps, {
    onTodoClick: toggleTodo,
    onDeleteTodoClick: deleteTodo,
  })(TodoList),
);

export default VisibleTodoList;
