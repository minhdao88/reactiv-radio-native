import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import Header from "../components/Header";
import ArtistRegisterForm from "../components/Forms/ArtistRegisterForm";
import baseStyles from '../styles/base';


class ArtistRegisterScreen extends Component {
  render() {
    return (
      <View style={baseStyles.container}>
        <ArtistRegisterForm/>
      </View>
    )
  }
}

const screenStyles = StyleSheet.create({
  container: {
  },
});

export default ArtistRegisterScreen;
