import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../config/router';

const router = AppNavigator.router;
const LoginNavAction = router.getActionForPathAndParams('Login');
const AuthNavAction = router.getActionForPathAndParams('AuthStack');
const initialNavState = router.getStateForAction(AuthNavAction);

const NavReducer = (state = initialNavState, action) => {
  return router.getStateForAction(action, state);
};

export default NavReducer;
