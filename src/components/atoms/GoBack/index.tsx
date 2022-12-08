import React, { FC } from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'

import styles from './styles'
import Icon from '@atoms/Icon'
import { Colors } from '@theme'

const hitConfig = { top: 20, left: 20, bottom: 20, right: 20 }

interface Props {
  onPress: () => any
  isDisabled?: boolean
  arrowColor?: string
  accessibilityLabelValue?: string
}
const GoBack: FC<Props> = ({
  isDisabled,
  onPress,
  arrowColor = Colors.black,
  accessibilityLabelValue
}) => {
  return (
    <TouchableWithoutFeedback
      accessibilityLabel={accessibilityLabelValue}
      hitSlop={hitConfig}
      onPress={isDisabled ? () => { } : onPress}>
      <View style={styles.container}>
        <Icon name="arrowleft" size={20} fill={arrowColor} />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default GoBack
