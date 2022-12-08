import {Spacing} from '@theme';

import {StyleSheet, Dimensions} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Constants } from '@theme';

const windowDimensions = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: windowDimensions.width,
    height: windowDimensions.width / 3,
    borderRadius: Constants.borderRadius,
  },
  title: {
    width: '100%',
    paddingTop: 10
  },
  description: {
    width: '100%',
  },
});
