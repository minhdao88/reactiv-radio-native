import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions
} from "react-native";
import BaseScrollLayout from "./BaseScrollLayout";
import MediaBox from "../components/MediaBox";
import { Button } from "react-native-elements";
import { mediaType } from "../utils/const";
import baseStyles from "../styles/base";


class Dashboard extends Component {
  render() {
    return (
      <BaseScrollLayout>
        <MediaBox type={mediaType.photo} />
        <MediaBox type={mediaType.audio} />
        <MediaBox />
        <MediaBox />
      </BaseScrollLayout>
    );
  }
}

export default Dashboard;
