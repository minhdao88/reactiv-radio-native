import React, { Component } from "react";
import {
  ScrollView,
  View
} from "react-native";
import BaseScrollLayout from "./BaseScrollLayout";
import UploadModal from '../components/UploadModal';
import Player from "../components/Player";
import baseStyles from '../styles/base';


class BaseAuthLayout extends Component {
  render() {
    return (
      <View style={baseStyles.container}>
        <ScrollView style={baseStyles.scrollContainer}>
          {this.props.children}
        </ScrollView>
        <Player/>
        <UploadModal/>
      </View>
    )
  }
}

export default BaseAuthLayout;
