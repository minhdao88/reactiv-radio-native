import { StyleSheet, Platform } from 'react-native';

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
  }
});
