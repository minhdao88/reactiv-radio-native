import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import Header from "../components/Header";
import LoginForm from "../components/Forms/LoginForm";
import baseStyles from '../styles/base';


class LoginScreen extends Component {
  render() {
    return (
      <View style={baseStyles.container}>
        <Header />
        <LoginForm/>
      </View>
    )
  }
}

const screenStyles = StyleSheet.create({
  container: {
    marginTop: 70,
    marginBottom: 60
  },
});

export default LoginScreen;
