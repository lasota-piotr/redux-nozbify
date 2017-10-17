import React from 'react';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import VisibilityFilterButtons from './components/VisibilityFilterButtons';
import './App.css';

const App = ({ match }) => (
  <div>
    <AddTodo />
    <VisibleTodoList filter={match.params.filter || 'all'} />
    <VisibilityFilterButtons />
  </div>
);

export default App;
