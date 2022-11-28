import { Colors, Spacing, Constants } from '@theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },
  button: {
    borderRadius: Constants.borderRadius,
    padding: Spacing.SMALL
  },

  // colors
  primary: {
    backgroundColor: Colors.violet
  },
  secondary: {
    backgroundColor: Colors.white
  },
  tertiary: {
    backgroundColor: 'transparent',
    padding: 0
  },

  // variation
  contained: {
    backgroundColor: Colors.violet
  },
  text: {
    backgroundColor: 'transparent',
    color: Colors.violet
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.black
  },
  disabled: {
    opacity: 0.35
  }
})
