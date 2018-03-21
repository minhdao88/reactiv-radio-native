import React, { Component } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import baseStyles from "../styles/base";
import { DrawerItems, SafeAreaView } from "react-navigation";

class SideMenu extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView>
        <AuthSidebar/>
      </SafeAreaView>
    );
  }
}

const NonLoginSidebar = () => (
  <View style={styles.container}>
    <Text
      onPress={() => navigation.navigate("Home")}
      style={styles.drawerItem}
    >
      Home
    </Text>
    <Text
      onPress={() => navigation.navigate("Login")}
      style={styles.drawerItem}
    >
      Login
    </Text>
    <Text
      onPress={() => navigation.navigate("ArtistRegister")}
      style={styles.drawerItem}
    >
      Artist Register
    </Text>
    <Text
      onPress={() => navigation.navigate("FanRegister")}
      style={styles.drawerItem}
    >
      Fan Register
    </Text>
  </View>
)

const AuthSidebar = () => (
  <View style={styles.container}>
    <Text
      onPress={() => navigation.navigate("Home")}
      style={styles.drawerItem}
    >
      My Billboard
    </Text>
    <Text
      onPress={() => navigation.navigate("Login")}
      style={styles.drawerItem}
    >
      My Playlist
    </Text>
    <Text
      onPress={() => navigation.navigate("ArtistRegister")}
      style={styles.drawerItem}
    >
      Stats
    </Text>
    <Text
      onPress={() => navigation.navigate("FanRegister")}
      style={styles.drawerItem}
    >
      Settings
    </Text>
    <Text
      onPress={() => navigation.navigate("FanRegister")}
      style={styles.drawerItem}
    >
      Logout
    </Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerItem: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#414141",
    padding: 15
  }
});

export default SideMenu;
