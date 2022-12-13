import Icon from '@atoms/Icon';
import Text from '@atoms/Text';
import { Colors } from '@theme';
import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import {OptionItem} from '../constants';
import styles from './styles';

interface Props {
  onTabPress: (index: number, path: string) => void;
  isActive: boolean;
  index: number;
  item: OptionItem;
}

const CustomTabBarItem = ({onTabPress, isActive, item}: Props) => {
  const {path, icon} = item;
  return (
    <TouchableOpacity onPress={() => onTabPress(path)} style={styles.container}>
      <View style={styles.content}>
        <Icon fill={isActive ? Colors.orange : Colors.mutedGray} name={icon} />
      </View>
    </TouchableOpacity>
  );
};

export default CustomTabBarItem;
