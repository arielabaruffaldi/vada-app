import Text from '@atoms/Text';
import React from 'react';
import { Image, TextStyle, View } from 'react-native';

import styles from './styles';

interface BannerProps {
  image?: string;
  title?: string;
  description?: string;
  style?: TextStyle | TextStyle[];
}

const Banner: React.FunctionComponent<BannerProps> = ({
  image,
  title,
  description,
  style,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={[styles.image, style]} />
      {title && (
        <Text style={styles.title} weight="bold">
          {title}
        </Text>
      )}
      {description && (
        <Text
          style={styles.description}
          color="gray"
          weight="light"
          size="xsmall">
          {description}
        </Text>
      )}
    </View>
  );
};

export default Banner;
