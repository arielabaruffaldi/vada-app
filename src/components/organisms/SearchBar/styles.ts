import { Dimensions, StyleSheet } from 'react-native';
import { Colors, Fonts } from '@theme';
import { Spacing } from '@theme/index';

const windowDimensions = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    borderColor: Colors.lightGray,
    borderWidth: 2,
    borderRadius: 100,
    padding: Spacing.SMALL,
    // paddingHorizontal: Spacing.LARGE
  },
  input: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: Spacing.SMALL
  }
});
