import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '@theme';

export default StyleSheet.create({
  default: {
    color: Colors.black,
    fontFamily: Fonts.DMSans_MEDIUM,
    textAlign: 'left',
  },
  left: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
  },
  center: {
    textAlign: 'center',
  },
  black: {
    color: Colors.black,
  },
  gray: {
    color: Colors.gray,
  },
  error: {
    color: Colors.error,
  },
  orange: {
    color: Colors.orange,
  },
  white: {
    color: Colors.white,
  },
  light: {
    fontFamily: Fonts.DMSans_REGULAR,
  },
  regular: {
    fontFamily: Fonts.DMSans_REGULAR,
  },
  bold: {
    fontFamily: Fonts.DMSans_BOLD,
  },
  xsmall: {
    fontSize: Fonts.SIZES.XSMALL,
  },
  small: {
    fontSize: Fonts.SIZES.SMALL,
  },
  medium: {
    fontSize: Fonts.SIZES.MEDIUM,
  },
  large: {
    fontSize: Fonts.SIZES.LARGE,
  },
});
