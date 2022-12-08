import React, { ReactNode } from 'react'
import { useNavigation } from '@react-navigation/native'

import GoBack from '@atoms/GoBack'

import styles from './styles'
import Text from '@atoms/Text'
import { TextStyle, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface LayoutProps {
  children: ReactNode
  backAction?: any
  backColor?: string
  title?: string
  extraHeight?: number
  shouldScroll?: boolean
  style?: TextStyle | TextStyle[]
  hasPadding?: boolean
  noHeader?: boolean
  infoAction?: () => void
}

const Layout = ({
  title,
  backAction,
  noHeader,
  hasPadding,
  children
}: LayoutProps) => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={[hasPadding && styles.hasPadding]}
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        {!noHeader && (
          <View style={[styles.header]}>
            <GoBack
              onPress={backAction || (() => navigation.goBack())}
            />
            <View style={styles.center}>
              {title && (
                <Text size="small" color="black" weight="bold" align="center">
                  {title}
                </Text>
              )}
            </View>
          </View>
        )}
        {children}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Layout
