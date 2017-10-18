import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import todoApp from './reducers/todoApp';

const configureStore = () => {
  const persistedState = {};

  /* eslint-disable no-underscore-dangle */
  const middleware = [logger];
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    todoApp,
    persistedState,
    composeEnhancers(applyMiddleware(...middleware)),
  );
  /* eslint-enable */

  return store;
};

export default configureStore;
