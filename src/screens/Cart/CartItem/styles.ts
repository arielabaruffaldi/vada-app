import {borderRadius} from './../../../theme/constants';
import {Colors, Constants, Spacing} from '@theme';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    padding: Spacing.SMALL,
    borderRadius: Constants.borderRadius,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: Spacing.TINY,
  },
  image: {
    borderRadius: Constants.borderRadius,
    height: undefined,
    aspectRatio: 1,
  },
  infoContainer: {
    flex: 1,
    marginHorizontal: 25,
  },
  buttonDelete : {
    padding: 10
  }
});
