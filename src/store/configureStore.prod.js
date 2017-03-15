import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';

export default function configureStoreProd(history, initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      routerMiddleware(history),
    ),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = rootReducer;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
