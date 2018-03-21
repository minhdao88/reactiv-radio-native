import React, { Component } from "react";
import AppNavigator from './config/router';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppReducer from './reducers';
import AppWithNavigationState from './config/router';

const store = createStore(AppReducer);

const App = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);

export default App;
