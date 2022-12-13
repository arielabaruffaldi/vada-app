import {StyleSheet, Dimensions} from 'react-native';

const windowDimensions = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  image: {
    width: '100%',
  },
  bannerHeader: {
    height: windowDimensions.width / 1.2,

  }
})
