import React from 'react';
import {Image, TextStyle, View} from 'react-native';

import styles from './styles';
import Text from '@atoms/Text';
import {TouchableOpacity} from 'react-native';

interface CardProps {
  item: any;
  style?: TextStyle | TextStyle[];
  onPress?: any;
}

const Card: React.FunctionComponent<CardProps> = ({item, style, onPress}) => {
  return (
    <TouchableOpacity style={[style]} onPress={onPress}>
      <Image source={{uri: item.image}} style={styles.image} />
      {item.title && (
        <Text style={styles.title} weight="bold">
          {item.title}
        </Text>
      )}
      {item.description && (
        <Text style={styles.description} weight="light" size="xsmall">
          {item.description}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Card;
