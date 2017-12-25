import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import FanRegisterForm from "../components/Forms/FanRegisterForm";
import baseStyles from '../styles/base';


class FanRegisterScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Fan Register',
  });
  render() {
    return (
      <View style={baseStyles.container}>
        <FanRegisterForm/>
      </View>
    )
  }
}


export default FanRegisterScreen;
