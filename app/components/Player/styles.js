import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: "#fff",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  sliderContainer: {
    flex: 0.9,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  slider: {
    width: "100%",
    height: 25
  },
  sliderTrack: {
    height: 4,
    backgroundColor: '#ccc',
  },
  sliderThumb: {
    width: 20,
    height: 20,
    backgroundColor: '#cc3458',
    borderRadius: 20 / 2
  },
  trackName: {
  },
  trackArtist: {
    color: '#cc3458'
  }
});
