import React, { Component } from "react";
import { View, Text, Image, Platform } from "react-native";
import { NavigationBar, Button } from "@shoutem/ui";
import { iconType } from "../../utils/const";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";


const NavHeader = () => (
  <View>
    <NavNonLogin />
  </View>
);

export const NavNonLogin = ({ onSearchPress, onMenuPress }) => (
  <View style={{ flexDirection: "row" }}>
    <Button onPress={onSearchPress}>
      <Icon name="ios-search-outline" size={25} />
    </Button>
    <Button onPress={onMenuPress}>
      <Icon name="ios-menu-outline" size={25} />
    </Button>
  </View>
);

export const NavAuthUserAvatar = ({onIndicatorPress}) => (
  <View style={styles.navUserAvatar.container}>
    <Image
      style={styles.navUserAvatar.image}
      source={require('../../../public/images/ava4.jpg')}
    />
    <View style={styles.navUserAvatar.indicator} onPress={onIndicatorPress}>
      <Text style={styles.navUserAvatar.text}>10</Text>
    </View>
  </View>
)
