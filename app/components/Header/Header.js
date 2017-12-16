import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationBar, Button } from '@shoutem/ui';
import {iconType} from '../../utils/const';
import Icon from "react-native-vector-icons/Ionicons";
import styles from './styles';


const NavHeader = () => (
  <View style={styles.container}>
    <NavNonLogin/>
  </View>
);

const NavNonLogin = ({onSearchPress, onMenuPress}) => (
  <View style={{flexDirection: 'row'}}>
    <Button onPress={onSearchPress}>
    < Icon name="ios-search-outline" size={25}/>
    </Button>
    <Button onPress={onMenuPress}>
      <Icon name="ios-menu-outline" size={25}/>
    </Button>
  </View>
)


export default NavHeader;
