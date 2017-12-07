import React, { Component } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import { Header, colors } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import {iconType} from '../../utils/const';

const ConditionHeader = () => (
  <Header
    outerContainerStyles={{backgroundColor: "#fff"}}
    rightComponent={
      <RightNav
        onSearchPress={() => {}}
        onMenuPress={() => {}}
      />
    }
  />
);

const RightNav = ({onSearchPress, onMenuPress}) => (
  <View style={{flexDirection: 'row'}}>
    <Icon
      type={iconType}
      name="ios-search"
      color="#ccc"
      onPress={onSearchPress}
    />
    <Icon
      type={iconType}
      name="ios-menu"
      color="#ccc"
      containerStyle={{paddingLeft: 20}}
      onPress={onMenuPress}
    />
  </View>
)


export default ConditionHeader;
