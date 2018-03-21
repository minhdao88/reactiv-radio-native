import React, { Component } from "react";
import { View, Text, Image, Platform } from "react-native";
import { NavigationBar, Button } from "@shoutem/ui";
import { iconType } from "../../utils/const";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import UploadModal from '../UploadModal';

const NavHeader = () => (
  <View>
    <NavNonLogin />
  </View>
);

export class AuthHeader extends Component {
  render() {
    return (
        <NavigationBar
          style={{
            container: {
              padding: 10,
              marginTop: Platform.OS == "ios" ? 20 : 0,
              alignSelf: 'stretch'
            }
          }}
          leftComponent={<NavAuthUserAvatar/>}
          rightComponent={<NavAuth/>}
        />
    )
  }
}

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

export class NavAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpload: false
    }
  }
  handlePressUploadIcon = () => {
    this.setState({
      showUpload: !this.state.showUpload
    })
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
