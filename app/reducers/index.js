import { combineReducers } from 'redux';
import NavReducer from './nav';

const AppReducer = combineReducers({
  nav: NavReducer,
});

export default AppReducer;
