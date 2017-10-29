import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';

const configureStore = () => {
  const persistedState = {};

  /* eslint-disable no-underscore-dangle */
  const middleware = [thunk, logger];
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    persistedState,
    composeEnhancers(applyMiddleware(...middleware)),
  );
  /* eslint-enable */
};

export default configureStore;
