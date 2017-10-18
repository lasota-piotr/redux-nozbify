import logger from 'redux-logger';
import promise from 'redux-promise';
import { createStore, applyMiddleware, compose } from 'redux';
import todoApp from './reducers/todoApp';

const configureStore = () => {
  const persistedState = {};

  /* eslint-disable no-underscore-dangle */
  const middleware = [promise, logger];
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    todoApp,
    persistedState,
    composeEnhancers(applyMiddleware(...middleware)),
  );
  /* eslint-enable */
};

export default configureStore;
