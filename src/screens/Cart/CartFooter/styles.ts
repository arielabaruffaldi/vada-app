import {Colors, Spacing} from '@theme';
import {StyleSheet, Dimensions} from 'react-native';

const windowDimensions = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignContent: 'space-between',
    alignSelf: 'flex-end'
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: Spacing.MEDIUM,
  },
  totalPrice: {
    marginLeft: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Spacing.MEDIUM,
  },
  button: {
    width: windowDimensions.width - Spacing.LATERAL,
  },
});
