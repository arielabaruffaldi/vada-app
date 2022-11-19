import { StatusBar, StyleSheet, NativeModules, Platform, Dimensions } from 'react-native';
import { Spacing } from '@theme';
import { isIos } from '@theme/constants';
import { useHeaderHeight } from '@react-navigation/elements';

const windowDimensions = Dimensions.get('window');

const makeStyles = (height: number) => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
    },
    hasPadding: {
      marginHorizontal: Spacing.LATERAL,
      paddingTop: isIos ? height / 2 : StatusBar.currentHeight,
    },
    scrollView: {
      flex: 1,
    },
  })
};

export default makeStyles