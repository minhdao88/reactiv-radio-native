import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import baseStyles from '../../styles/base';


const PhotoBox = () => (
  <View
    style={baseStyles.container}
  >
    <Image
      style={[baseStyles.image, {resizeMode: 'cover'}]}
      source={require('../../../public/images/chaplet.jpg')}
    />
  </View>
);

export default PhotoBox;
