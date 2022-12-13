import Banner from '@atoms/Banner';
import GoBack from '@atoms/GoBack';
import React from 'react';
import {TextStyle, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import styles from './styles';

interface EventDetailHeaderProps {}

const EventDetailHeader: React.FunctionComponent<
  EventDetailHeaderProps
> = () => {
  const navigation = useNavigation();

  return (
    <View>
      <GoBack onPress={() => navigation.goBack(null)} />
    </View>
  );
};

export default EventDetailHeader;
