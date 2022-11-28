import Text from '@atoms/Text'
import { Colors } from '@theme'
import React, { FC } from 'react'
import { TextInput, View, KeyboardTypeOptions, TextStyle } from 'react-native'

import styles from './styles'

interface InputProps {
  placeholder?: string
  keyboardType?: KeyboardTypeOptions
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'
  autoCorrect?: boolean
  placeholderTextColor?: 'black' | 'white' | 'gray'
  secureTextEntry?: boolean
  onChangeText?: (text: string) => void
  value?: string
  error?: string
  style?: TextStyle | TextStyle[]
  variant?: 'outlined' | 'contained' | 'text'
  size?: 'xsmall' | 'small' | 'medium'
}

const Input: FC<InputProps> = ({
  placeholder,
  keyboardType,
  autoCapitalize,
  autoCorrect,
  placeholderTextColor = 'gray',
  secureTextEntry,
  onChangeText,
  value,
  error,
  style,
  variant = 'contained',
  size = 'xsmall'
}) => {
  return (
    <>
      <View style={[styles.container, style]}>
        <TextInput
          placeholder={placeholder}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          style={[styles.input, styles[variant], styles[size]]}
          placeholderTextColor={Colors[placeholderTextColor]}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
      {error !== '' && <Text>{error}</Text>}
    </>
  )
}

export default Input
