import React, { Component } from "react";
import {
  View,
  Text,
} from "react-native";
import { Button, TextInput } from "@shoutem/ui";
import {formStyles} from './styles';


const FanRegisterForm = ({onSubmit}) => (
  <View
    style={formStyles.container}
  >
    <TextInput
      placeholder='Username'
      style={formStyles.input}
    />
    <TextInput
      placeholder='Email'
      style={formStyles.input}
    />
    <TextInput
      placeholder='Password'
      secureTextEntry
      style={formStyles.input}
    />
    <TextInput
      placeholder='Location'
      style={formStyles.input}
    />
    <Button
      style={formStyles.button}
    >
      <Text style={formStyles.buttonText}>Register</Text>
    </Button>
  </View>
);

export default FanRegisterForm;
