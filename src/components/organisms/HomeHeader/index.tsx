import React, { ReactNode } from 'react'
import { View } from 'react-native'

import styles from './styles'
import Text from '@atoms/Text'

interface HomeHeaderProps {
  children: ReactNode | ReactNode[]
}

const HomeHeader: React.FunctionComponent<HomeHeaderProps> = props => {
  return (
    <View style={styles.container}>
      <Text>{props.children}</Text>
    </View>
  )
}

export default HomeHeader
