import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../App';

// eslint-disable-next-line react/prop-types
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="" component={App} />
    </Router>
  </Provider>
);

export default Root;
