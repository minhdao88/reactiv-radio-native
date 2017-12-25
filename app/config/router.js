import React, { Component } from "react";
import { Text } from "react-native";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import HomeScreen from "../screens/Home";
import ArtistRegisterScreen from "../screens/ArtistRegister";
import FanRegisterScreen from "../screens/FanRegister";
import SideMenu from "../screens/SideMenu";
import LoginScreen from "../screens/Login";
import Dashboard from '../screens/Dashboard';
import { NavNonLogin } from "../components/Header/Header";
import Icon from "react-native-vector-icons/Ionicons";


const navigationOptions = ({ navigation }) => ({
  headerStyle: { backgroundColor: "#fff" },
  headerRight: (
    <NavNonLogin onMenuPress={() => navigation.navigate("DrawerToggle")} />
  )
})

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
    Dashboard: {screen: Dashboard}
  },
  {
    navigationOptions: navigationOptions
  }
);


const AppNavigator = DrawerNavigator(
  {
    LoginStack: { screen: LoginStack },
    AuthStack: {screen: AuthStack}
  },
  {
    // Default config for all screens,
    drawerPosition: 'right',
    contentComponent: SideMenu
  }
);

export default AppNavigator;
