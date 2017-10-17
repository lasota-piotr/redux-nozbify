import React from 'react';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import VisibilityFilterButtons from './components/VisibilityFilterButtons';
import './App.css';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <VisibilityFilterButtons />
  </div>
);

export default App;
