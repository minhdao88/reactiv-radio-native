import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import Header from "../components/Header";
import FanRegisterForm from "../components/Forms/FanRegisterForm";
import baseStyles from '../styles/base';


class FanRegisterScreen extends Component {
  render() {
    return (
      <View style={baseStyles.container}>
        <FanRegisterForm/>
      </View>
    )
  }
}


export default FanRegisterScreen;
