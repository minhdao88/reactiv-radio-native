import React, { Component } from "react";
import { Animated, StyleSheet, View, Text, Dimensions, Image } from "react-native";
import baseStyles from "../../styles/base";
import { Button, TextInput } from "@shoutem/ui";
import { connect } from "react-redux";
import { createAnimatableComponent, View as AnimatedView } from 'react-native-animatable';

class UploadModal extends Component {
  state = {
    visible: false,
    top: new Animated.Value(Dimensions.get("window").height),
  };
  slideIn = () => {
    Animated.timing(this.state.top, {
      toValue: 0,
      duration: 300
    }).start();
  };
  slideOut = () => {
    Animated.timing(this.state.top, {
      toValue: Dimensions.get("window").height,
      duration: 300
    }).start();
  }
  render() {
    const { show } = this.props;
    if (show) {
      this.slideIn();
    } else {
      this.slideOut();
    }
    const top = {top: this.state.top};
    return (
      <Animated.View style={[styles.container, top]}>
        <View style={styles.publishContainer}>
          <Button
            style={{
              height: 40,
              backgroundColor: "#cc3458",
              borderColor: "#cc3458",
              width: "60%",
              borderRadius: 4
            }}
          >
            <Text style={styles.publishText}>Publish</Text>
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
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
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
});

const mapProps = state => {
  return {
    show: state.modal.show_upload
  };
};

export default connect(mapProps)(UploadModal);
