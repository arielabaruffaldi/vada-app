import React, { ReactNode } from 'react';
import { Text as TextNative, TextStyle } from 'react-native';
import styles from './styles';

interface TextProps {
  style?: TextStyle | TextStyle[];
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  weight?: 'light' | 'regular' | 'bold';
  color?: 'black' | 'white' | 'gray' | 'orange' | 'error';
  align?: 'left' | 'center' | 'right';
  children?: ReactNode;
}

const Text = ({
  style,
  size = 'small',
  weight = 'regular',
  color = 'black',
  align = 'left',
  children,
}: TextProps) => {
  return (
    <TextNative
      style={[
        styles.default,
        styles[size],
        styles[weight],
        styles[color],
        styles[align],
        style,
      ]}>
      {children}
    </TextNative>
  );
};

export default Text;
