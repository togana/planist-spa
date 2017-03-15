import { createStore, compose } from 'redux';
import rootReducer from '../reducers';
import DevTools from '../utils/DevTools';

export default function configureStoreDev(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      DevTools.instrument(),
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
