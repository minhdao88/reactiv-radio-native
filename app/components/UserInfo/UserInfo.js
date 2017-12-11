import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import baseStyles from '../../styles/base';

const UserInfo = () => (
  <View style={styles.container}>
    <Image
      style={styles.avatar}
      source={require('../../../public/images/ava1.jpg')}
    />
    <View style={styles.userinfo}>
      <Text style={styles.username}>Quelle Dez Gazell</Text>
      <Text style={[baseStyles.text, baseStyles.textSmall]}>Alternative Rock</Text>
      <Text style={[baseStyles.text, baseStyles.textSmall]}>ListBon, Portugal</Text>
    </View>
  </View>
);

export default UserInfo;
