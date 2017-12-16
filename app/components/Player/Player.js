import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "@shoutem/ui";
import Slider from "react-native-slider";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import baseStyles from "../../styles/base";

class Player extends Component {
  constructor(props) {
    super(props);
    this.iconNames = {
      play: "ios-play-outline",
      pause: "ios-pause-outline"
    };
    this.state = {
      playing: false
    };
  }

  handlePlayClick = () => {
    this.setState({
      playing: !this.state.playing
    });
  };

  render() {
    const playIcon = this.state.playing
      ? this.iconNames.pause
      : this.iconNames.play;
    return (
      <View style={styles.container}>
        <Button onPress={this.handlePlayClick}>
          <Icon name={playIcon} size={30} />
        </Button>
        <View style={styles.sliderContainer}>
          <Text style={styles.trackName}>EarthBound</Text>
          <Slider
            minimumTrackTintColor="#fd9648"
            style={styles.slider}
            trackStyle={styles.sliderTrack}
            thumbStyle={styles.sliderThumb}
          />
          <Text>
            by <Text style={styles.trackArtist}>Simple Force</Text>
          </Text>
        </View>
        <Button>
          <Icon name="ios-albums-outline" size={25} />
        </Button>
      </View>
    );
  }
}

export default Player;
