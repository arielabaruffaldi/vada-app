import { Dimensions, StyleSheet } from 'react-native';
import { Colors, Fonts } from '@theme';
import { Spacing } from '@theme/index';

const windowDimensions = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    // flex: 1,
  },
  title: {
    marginTop: Spacing.LARGE,
    width: windowDimensions.width - Spacing.XLARGE,
  },
  carrouselTitle:{
    marginTop: Spacing.LARGE,
    marginBottom: Spacing.MEDIUM,
    marginHorizontal: Spacing.LATERAL,
    textDecorationLine: 'underline'
  }
});
