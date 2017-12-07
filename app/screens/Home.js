import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header';


class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Header/>
        <Text>THIS IS HOME PAGE Test</Text>
      </View>
    );
  }
}

export default HomeScreen;
