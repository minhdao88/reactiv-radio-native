import React, { Component } from 'react';
import { createAnimatableComponent, View, Text } from 'react-native-animatable';

const ReactivModal = ({children}) => (
  <View animation="fadeIn" style={styles.container} useNativeDriver>
    children
  </View>
)
