import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions
} from "react-native";
import Player from "../components/Player";
import baseStyles from '../styles/base';


class BaseScrollLayout extends Component {
  render() {
    return (
      <View style={baseStyles.container}>
        <ScrollView style={baseStyles.scrollContainer}>
          {this.props.children}
        </ScrollView>
        <Player />
      </View>
    );
  }
}

export default BaseScrollLayout;
