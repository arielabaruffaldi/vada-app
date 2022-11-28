import { FC, ReactNode } from 'react'
import { ScrollView, TextStyle } from 'react-native'
import { SafeAreaView } from 'react-navigation'

import { getDefaultHeaderHeight } from '@react-navigation/elements'
import { useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context'

import makeStyles from './styles'

interface PaddingWrapperProps {
  children: ReactNode
  hasPadding?: boolean
  style?: TextStyle | TextStyle[]
}

const PaddingWrapper: FC<PaddingWrapperProps> = ({ children, hasPadding = false, style }) => {
  const frame = useSafeAreaFrame()
  const insets = useSafeAreaInsets()
  const headerHeight = getDefaultHeaderHeight(frame, false, insets.top)
  const styles = makeStyles(headerHeight)

  return (
    <SafeAreaView style={[styles.container, style]}>
      <ScrollView
        contentContainerStyle={[hasPadding && styles.hasPadding]}
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  )
}

export default PaddingWrapper
