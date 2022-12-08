import { Dimensions, StyleSheet } from 'react-native';

import { Spacing, Colors } from '@theme';

const windowDimensions = Dimensions.get('window');


export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  scrollView:{
    width: windowDimensions.width - Spacing.LATERAL,
    flex: 1,
  },
  hasPadding: {
    // marginHorizontal: Spacing.LATERAL,
  },
  header: {
    paddingTop: 20,
    width: '100%',
    marginBottom: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  center: {
    flex: 1,
  },
});
