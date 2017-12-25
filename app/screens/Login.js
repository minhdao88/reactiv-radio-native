import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Dimensions, Alert } from "react-native";
import LoginForm from "../components/Forms/LoginForm";
import baseStyles from "../styles/base";


class LoginScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Login"
  });
  handleOnSubmit = () => {
    this.props.navigation.navigate("Dashboard");
  };
  render() {
    return (
      <View style={baseStyles.container}>
        <LoginForm onSubmit={this.handleOnSubmit} />
      </View>
    );
  }
}

export default LoginScreen;
