import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions
} from "react-native";
import Header from "../components/Header";
import Player from "../components/Player";
import { Button } from "react-native-elements";
import MediaBox from "../components/MediaBox";
import { mediaType } from "../utils/const";
import baseStyles from '../styles/base';
import { Actions } from 'react-native-router-flux';


const HomeBanner = () => (
  <View style={screenStyles.bannerContainer}>
    <View style={screenStyles.bannerBackgroundContainer}>
      <Image
        source={require("../../public/images/chaplet1.jpg")}
        style={screenStyles.bannerBackgroundImg}
      />
    </View>
    <View style={screenStyles.bannerTextContainer}>
      <Image
        source={require("../../public/images/reactiv.png")}
        style={screenStyles.bannerTextImg}
      />
      <Text style={screenStyles.bannerText}>
        DISCOVER.LOCAL.WORLDWIDE
      </Text>
      <View style={screenStyles.bannerButtonContainer}>
        <Button
          buttonStyle={screenStyles.bannerButton}
          onPress={() => Actions.artistRegister()}
          title="ARTIST SIGN UP"
        />
        <Button
          buttonStyle={screenStyles.bannerButton}
          onPress={() => Actions.fanRegister()}
          title="FAN SIGN UP"
        />
      </View>
    </View>
  </View>
);

class HomeScreen extends Component {
  render() {
    return (
      <View style={baseStyles.container}>
        <ScrollView style={screenStyles.scrollContainer}>
          <HomeBanner />
          <MediaBox type={mediaType.photo} />
          <MediaBox type={mediaType.audio} />
          <MediaBox />
          <MediaBox />
        </ScrollView>
        <Player />
      </View>
    );
  }
}

const screenStyles = StyleSheet.create({
  scrollContainer: {
    marginBottom: 60
  },
  bannerContainer: {
    height: Dimensions.get("window").height * 0.7
  },
  bannerBackgroundContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  },
  bannerBackgroundImg: {
    width: "100%",
    height: "100%"
  },
  bannerTextContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "transparent"
  },
  bannerTextImg: {
    width: 128
  },
  bannerText: {
    marginTop: 20,
    marginBottom: 10,
    color: "#fff",
    fontSize: 20
  },
  bannerButtonContainer: {
    marginTop: 20,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  bannerButton: {
    backgroundColor: "transparent",
    borderRadius: 10,
    borderColor: "#fff",
    borderWidth: 1
  }
});

export default HomeScreen;
