import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import throttle from 'lodash/throttle';
import todoApp from './reducers/todoApp';
import { loadState, saveState } from './localStorage';

const configureStore = () => {
  const persistedState = loadState();

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

  store.subscribe(
    throttle(() => {
      saveState({
        todos: store.getState().todos,
      });
    }),
    1000,
  );

  return store;
};

export default configureStore;
