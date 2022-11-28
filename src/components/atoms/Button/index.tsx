import React, { FC, ReactNode } from 'react'
import { TextStyle, TouchableOpacity, View } from 'react-native'

import { styles } from './styles'

interface ButtonProps {
  disabled?: boolean
  onPress: () => any
  variation?: 'contained' | 'text'
  color?: 'primary' | 'secondary' | 'tertiary'
  children: ReactNode
  style?: TextStyle | TextStyle[]
}

const Button: FC<ButtonProps> = ({
  disabled = false,
  onPress,
  variation = 'contained',
  color = 'primary',
  children,
  style
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={disabled}
        style={[
          styles.button,
          styles[color],
          styles[variation],
          disabled && styles.disabled,
          style
        ]}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    </View>
  )
}

export default Button
