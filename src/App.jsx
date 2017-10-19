import React from 'react';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import VisibilityFilterButtons from './components/VisibilityFilterButtons';
import './App.css';
import Layout from './components/Layout';

const App = () => (
  <Layout>
    <div className="o-flex o-flex--column u-margin-top-huge">
      <AddTodo />
      <VisibleTodoList />
      <VisibilityFilterButtons />
    </div>
  </Layout>
);

export default App;
