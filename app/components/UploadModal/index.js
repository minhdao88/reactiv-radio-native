import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
import baseStyles from "../../styles/base";
import { Button, TextInput } from "@shoutem/ui";

class UploadModal extends Component {
  render() {
    const { show } = this.props;
    return (
      <View
        style={styles.container}
      >
        <View
          style={styles.publishContainer}
        >
          <Button
            style={{
              height: 40,
              backgroundColor: "#cc3458",
              borderColor: "#cc3458",
              width: "60%",
              borderRadius: 4
            }}
          >
            <Text style={styles.publishText}>
              Publish
            </Text>
          </Button>
        </View>
        <View>
          <Image
            style={styles.uploadImage}
            source={require("../../../public/images/chaplet.jpg")}
          />
        </View>
        <View>
          <TextInput placeholder="Add a tittle" />
          <TextInput placeholder="Describe your photo" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: "100%",
    height: "100%"
  },
  publishContainer: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  publishText: {
    color: "#fff",
    fontWeight: "bold"
  },
  uploadImage: {
    width: "100%",
    height: Dimensions.get("window").height - 285
  },
  uploadForm: {}
});

export default UploadModal;
