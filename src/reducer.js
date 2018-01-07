import { fromJS } from 'immutable';
import * as at from './actionTypes';

const INITIAL_STATE = fromJS({
  type: '',
  index: '',
  theme: [],
  bg: '',
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case at.CHANGETYPE:
      return state.set('type', fromJS(action.data));
    case at.CHANGEINDEX:
      return state.set('index', fromJS(action.index));
    case at.CHANGETHEME:
      return state.set('theme', fromJS(action.theme));
    case at.CHANGEBG:
      return state.set('bg', fromJS(action.bg));
    default:
      return state;
  }
};
