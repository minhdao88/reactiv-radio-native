import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions
} from "react-native";
import BaseAuthLayout from "./BaseAuthLayout";
import MediaBox from "../components/MediaBox";
import { Button } from "react-native-elements";
import { mediaType } from "../utils/const";
import baseStyles from "../styles/base";


class Dashboard extends Component {
  render() {
    return (
      <BaseAuthLayout>
        <MediaBox type={mediaType.photo} />
        <MediaBox type={mediaType.audio} />
        <MediaBox />
        <MediaBox />
      </BaseAuthLayout>
    );
  }
}

export default Dashboard;
