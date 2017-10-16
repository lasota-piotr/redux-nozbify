import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import throttle from 'lodash/throttle';
import todoApp from './reducers/todoApp';
import { loadState, saveState } from './localStorage';


const configureStore = () => {
  const persistedState = loadState();

  /* eslint-disable no-underscore-dangle */
  const store = createStore(
    todoApp,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(logger),
  );
  /* eslint-enable */

  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos,
    });
  }), 1000);

  return store;
};

export default configureStore;
