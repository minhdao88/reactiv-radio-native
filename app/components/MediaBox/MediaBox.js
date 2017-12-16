import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import UserInfo from '../UserInfo';
import styles from './styles';
import baseStyles from '../../styles/base';
import {mediaType} from '../../utils/const';
import PhotoBox from './PhotoBox';
import AudioBox from './AudioBox';

const getMediaBox = (type) => {
  switch (type) {
    case mediaType.photo:
      return PhotoBox;
      break;
    case mediaType.audio:
      return AudioBox;
      break;
    default:
      return PhotoBox;
      break;
  }
}

const MediaBox = ({type}) => {
  var Content = getMediaBox(type);
  return (
    <View
      style={styles.container}
    >
      <View
        style={styles.info}
      >
        <UserInfo />
        <Text
          style={[baseStyles.text, styles.posted]}
        >
          Feb, 17 2017
        </Text>
      </View>
      <Content/>
    </View>
  )
}

export default MediaBox;
