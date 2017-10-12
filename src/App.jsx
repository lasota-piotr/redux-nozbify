import React, { Component } from 'react';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import VisibilityFilterButtons from './components/VisibilityFilterButtons';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <VisibilityFilterButtons />
      </div>
    );
  }
}

export default App;
