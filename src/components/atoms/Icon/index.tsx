import { Colors } from '@theme'
import React from 'react'
import { TextStyle } from 'react-native'
import { AntDesign as ExpoIcons } from '@expo/vector-icons'

interface IconProps {
  name: any
  size?: number
  height?: number
  style?: TextStyle | TextStyle[]
  fill?: string
  color?: string
}

const Icon: React.FunctionComponent<IconProps> = ({
  name,
  size = 24,
  height = 24,
  color,
  style,
  fill = Colors.black
}) => {
  return (
    <ExpoIcons
      style={[style]}
      name={name}
      size={size}
      height={height}
      color={color}
      fill={fill}
    />
  )
}

export default Icon
