import { Colors, Spacing } from '@theme';

import { StyleSheet, Dimensions } from 'react-native';

const windowDimensions = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    marginTop: Spacing.LARGE,
    width: "100%",
  },
  box: {
    width: windowDimensions.width - Spacing.LATERAL,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 20,
    marginTop: Spacing.SMALL
  },
  card: {
    // flex: 1,
    marginVertical: Spacing.SMALL,
    width: (windowDimensions.width - Spacing.LARGE * 1.5) / 2,
  },
});
