import { Colors, Constants, Spacing } from '@theme';
import { StyleSheet } from 'react-native';
import { isIos } from '@theme/constants';
import { Fonts } from '@theme/index';

export default StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    borderRadius: Constants.borderRadius,
    padding: Spacing.MEDIUM,
    paddingVertical: isIos ? Spacing.MEDIUM : Spacing.SMALL,
    // borderWidth: 1,
    // borderColor: Colors.black,
    width: '100%',
  },
  error: {
    color: Colors.error,
  },
  outlined: {
    borderColor: Colors.lightGray,
    borderWidth: 2,
    borderRadius: 100
  },
  contained: {
    backgroundColor: Colors.lightGray,
  },
  text: {
    padding: 0,
    paddingVertical: 0
  },
  xsmall: {
    fontSize: Fonts.SIZES.XSMALL
  },
  small: {
    fontSize: Fonts.SIZES.SMALL
  },
  medium: {
    fontSize: Fonts.SIZES.MEDIUM
  }
});
