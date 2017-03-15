import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import exsample from './exsample';

const rootReducer = combineReducers({
  exsample,
  router: routerReducer,
});

export default rootReducer;
