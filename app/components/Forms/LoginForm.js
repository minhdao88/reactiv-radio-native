import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, TextInput } from "@shoutem/ui";
import { formStyles } from "./styles";

const LoginForm = ({ onSubmit }) => (
  <View style={formStyles.container}>
    <TextInput placeholder="Username or email" style={formStyles.input} />
    <TextInput
      placeholder="Password"
      secureTextEntry
      style={formStyles.input}
    />
    <Button style={formStyles.button} onPress={onSubmit}>
      <Text style={formStyles.buttonText}>Login</Text>
    </Button>
    <View style={styles.loginLinkContainer}>
      <Text>Don't have account?</Text>
      <Button styleName="clear">
        <Text style={styles.loginLink}>Register here</Text>
      </Button>
    </View>
  </View>
);

const styles = StyleSheet.flatten({
  loginLinkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  loginLink: {
    color: "#00aadf"
  }
});

LoginForm.navigationOptions = ({ navigation }) => ({
  title: "Login"
});

export default LoginForm;
