import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import baseStyles from '../../styles/base';


const PhotoBox = () => (
  <View
  >
    <Image
      style={{
        width: "100%",
      }}
      source={require('../../../public/images/chaplet.jpg')}
    />
  </View>
);

export default PhotoBox;
