import { Colors, Spacing } from '@theme';
import {Dimensions, StyleSheet} from 'react-native';

export const TAB_HEIGHT = 65;
const windowDimensions = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    // position: 'relative',
    width: windowDimensions.width,
  },
  content: {
    width: '100%',
    height: TAB_HEIGHT,
    paddingHorizontal: Spacing.MEDIUM,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
