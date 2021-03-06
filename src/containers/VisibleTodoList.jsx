import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';
import TodoList from '../components/TodoList';
import { getVisibleTodos, getErrorMessage, getIsFetching } from '../reducers/todos/todos';
import FetchError from '../components/FetchError';

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, fetchTodos, fetchProjects } = this.props;
    fetchTodos(filter).then(() => { console.log('fetched todos'); });
    fetchProjects().then(() => { console.log('fetched projects'); });
  }

  render() {
    const {
      toggleTodo,
      deleteTodo,
      todos,
      isFetching,
      errorMessage,
      togglePriority,
    } = this.props;
    if (isFetching && !todos.length) {
      return <p>Loading...</p>;
    }

    if (errorMessage && !todos.length) {
      return (
        <FetchError message={errorMessage} onRetry={() => this.fetchData()} />
      );
    }

    return (
      <TodoList
        todos={todos}
        onTodoClick={toggleTodo}
        onPriorityClick={togglePriority}
        onDeleteTodoClick={deleteTodo}
      />
    );
  }
}

const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
    filter,
  };
};

VisibleTodoList = withRouter(
  connect(mapStateToProps, actions)(VisibleTodoList),
);

export default VisibleTodoList;
