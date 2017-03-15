import { handleActions } from 'redux-actions';
import { toggle } from '../actions/exsample';

const initialState = {
  isAction: false,
};

const exsample = handleActions({
  [toggle]: state => Object.assign({}, state, { isAction: !state.isAction }),
}, initialState);

export default exsample;
