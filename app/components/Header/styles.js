import { StyleSheet, Platform } from 'react-native';
import { mapElementProps } from '@shoutem/ui/html';

export default StyleSheet.flatten({
  container: {
    backgroundColor: "#fff",
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: (Platform.OS === 'ios') ? 64 : 54,
    paddingTop: 20,
    paddingRight: 10,
    paddingLeft: 10
  },
  navBarItem: {
    flex: 1,
    justifyContent: 'center'
  },
  navUserAvatar: {
    container: {
      position: 'relative'
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 50/2
    },
    indicator: {
      position: 'absolute',
      top: -5,
      right: -8,
      padding: 4,
      borderRadius: 30,
      backgroundColor: "#a93aba",
    },
    text: {
      color: "#fff",
      fontSize: 12,
      fontWeight: 'bold'
    }
  }
});
