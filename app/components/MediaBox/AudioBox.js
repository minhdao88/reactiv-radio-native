import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import baseStyles from '../../styles/base';


const AudioBox = () => (
  <View
  >
    <Image
      style={{
        width: "100%",
      }}
      source={require('../../../public/images/chaplet2.jpg')}
    />
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Image
        style={{width: 64}}
        source={require('../../../public/images/play-button.png')}
      />
    </View>
  </View>
);

export default AudioBox;
