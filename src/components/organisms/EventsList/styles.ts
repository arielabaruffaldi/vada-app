import { Colors, Spacing } from '@theme';

import { StyleSheet, Dimensions } from 'react-native';

const windowDimensions = Dimensions.get('window');
export default StyleSheet.create({
  cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 20,
  },
  card: {
    marginVertical: Spacing.SMALL,
    width: (windowDimensions.width - Spacing.LARGE * 1.5) / 2,
  },
});
