import {Colors} from '../../theme';

import {StyleSheet, Dimensions} from 'react-native';
const windowDimensions = Dimensions.get('window');

export default StyleSheet.create({
  bannerHeader: {
    height: windowDimensions.width / 1.2,
    width: '100%'
  },
});
