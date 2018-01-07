import { combineReducers } from 'redux';
import { reducer as colorTheme } from '../../src';

import demo from './containers/Demo/reducer';

export default () =>
  combineReducers({
    colorTheme,
    demo,
  });
