import React, { Component } from "react";
import { Text } from "react-native";
import { addNavigationHelpers, StackNavigator, DrawerNavigator } from "react-navigation";
import { createStore, combineReducers } from 'redux';
import { connect } from 'react-redux';
import HomeScreen from "../screens/Home";
import ArtistRegisterScreen from "../screens/ArtistRegister";
import FanRegisterScreen from "../screens/FanRegister";
import SideMenu from "../screens/SideMenu";
import LoginScreen from "../screens/Login";
import Dashboard from "../screens/Dashboard";
import {
  NavNonLogin,
  NavAuth,
  NavAuthUserAvatar
} from "../components/Header/Header";
import Icon from "react-native-vector-icons/Ionicons";


const navigationOptions = ({ navigation }) => ({
  headerStyle: { backgroundColor: "#fff" },
  headerRight: (
    <NavNonLogin onMenuPress={() => navigation.navigate("DrawerToggle")} />
  )
});

const authNavOptions = ({ navigation }) => ({
  headerStyle: { backgroundColor: "#fff", height: 70, padding: 10 },
  headerLeft: <NavAuthUserAvatar/>,
  headerRight: <NavAuth onMenuPress={() => navigation.navigate("DrawerToggle")} />
});

const LoginStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Login: {
      screen: LoginScreen
    },
    ArtistRegister: {
      screen: ArtistRegisterScreen
    },
    FanRegister: {
      screen: FanRegisterScreen
    }
  },
  {
    navigationOptions: navigationOptions
  }
);

const AuthStack = StackNavigator(
  {
    Dashboard: { screen: Dashboard }
  },
  {
    navigationOptions: authNavOptions
  }
);

export const AppNavigator = DrawerNavigator(
  {
    // LoginStack: { screen: LoginStack },
    AuthStack: { screen: AuthStack }
  },
  {
    // Default config for all screens,
    drawerPosition: "right",
    contentComponent: SideMenu,
    initialRouteName: 'AuthStack',
  }
);

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator
    navigation={addNavigationHelpers({ dispatch, state: nav })}
  />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);;
