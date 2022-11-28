/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { StatusBar, StyleSheet } from 'react-native'
import { Spacing } from '@theme'
import { isIos } from '@theme/constants'


const makeStyles = (height: number) => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1
    },
    hasPadding: {
      marginHorizontal: Spacing.LATERAL,
      paddingTop: isIos ? height / 2 : StatusBar.currentHeight
    },
    scrollView: {
      flex: 1
    }
  })
}

export default makeStyles
