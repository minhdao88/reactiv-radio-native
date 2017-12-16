import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";
import HomeScreen from "../screens/Home";
import ArtistRegisterScreen from "../screens/ArtistRegister";
import FanRegisterScreen from "../screens/FanRegister";
import Header from '../components/Header';


export const HomePage = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={HomeScreen} navBar={Header}/>
      <Scene key="artistRegister" title="ARTIST SIGN UP" component={ArtistRegisterScreen} />
      <Scene key="fanRegister" title="FAN SIGN UP" component={FanRegisterScreen} />
    </Scene>
  </Router>
);
