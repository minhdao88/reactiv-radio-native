import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import UserInfo from '../UserInfo';
import styles from './styles';
import baseStyles from '../../styles/base';
import PhotoBox from './PhotoBox';

const MediaBox = () => {
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
      <PhotoBox/>
    </View>
  )
}

export default MediaBox;
