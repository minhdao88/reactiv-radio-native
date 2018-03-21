import { combineReducers } from 'redux';
import nav from './nav';
import modal from './modal';

const AppReducer = combineReducers({
  nav,
  modal
});

export default AppReducer;
