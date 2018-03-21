import React, { Component } from "react";
import { View, Text, Image, Platform } from "react-native";

import { Button } from "@shoutem/ui";
import { iconType } from "../../utils/const";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import { connect } from 'react-redux';
import { toggleUploadModal } from '../../actions/modal';


export class NavAuth extends Component {
  constructor(props) {
    super(props);
  }
  handlePressUploadIcon = () => {
    this.props.dispatch(toggleUploadModal());
  }
  render() {
    const {
      onSearchPress,
      onMessagePress,
      onMenuPress
    } = this.props;
    return (
      <View style={{ flexDirection: "row"}}>
        <Button onPress={onSearchPress}>
          <Icon name="ios-search-outline" size={25} />
        </Button>
        <Button onPress={this.handlePressUploadIcon}>
          <Icon name="ios-cloud-upload-outline" size={25} />
        </Button>
        <Button onPress={onMessagePress}>
          <Icon name="ios-chatbubbles-outline" size={25} />
        </Button>
        <Button onPress={onMenuPress}>
          <Icon name="ios-menu-outline" size={25} />
        </Button>
      </View>
    );
  }
}

export default connect()(NavAuth);
