import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import {OPTIONS} from './constants';
import CustomTabBarItem from './CustomTabBarItem';

import styles from './styles';

const CustomTabBar = ({state, navigation}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const {index} = state;
    setCurrent(index);
  }, [state.index]);

  const onTabPress = (path: string) => {
    navigation.navigate(path);
  };
  return (
    <View style={[styles.container]}>
      <View style={styles.content}>
        {OPTIONS.map((item, index) => (
          <CustomTabBarItem
            key={index}
            item={item}
            isActive={index === current}
            onTabPress={onTabPress}
            index={index}
          />
        ))}
      </View>
    </View>
  );
};

export default CustomTabBar;
