import React, { Component } from "react";
import {
  View,
  Text,
} from "react-native";
import { Button, TextInput } from "@shoutem/ui";


const LoginForm = ({onSubmit}) => (
  <View>
    <TextInput
      placeholder='Username or email'
    />
    <TextInput
      placeholder='Password'
      secureTextEntry
    />
    <Button>
      <Text>Login</Text>
    </Button>
  </View>
);

export default LoginForm;
