import Card from '@molecules/Card';
import React from 'react';
import {useDispatch} from 'react-redux';
import {TextStyle, View} from 'react-native';

import styles from './styles';

import {useNavigation} from '@react-navigation/native';
import {selectEvent} from '@store/actions/events';

interface EventsListProps {
  style?: TextStyle | TextStyle[];
  events: Event[];
}

interface Event {
  id: number;
  categoryId: number;
  title: string;
  description: string;
  image: string;
}

const EventsList = ({style, events}: EventsListProps) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleSelectedEvent = (event: Event) => {
    dispatch(selectEvent(event.id));

    navigation.navigate('EventDetail', {
      title: event.title,
    });
  };

  return (
    <View style={[styles.cards]}>
      {events.map(event => (
        <Card
          onPress={() => handleSelectedEvent(event)}
          style={[styles.card, style]}
          key={event.id}
          item={event}
        />
      ))}
    </View>
  );
};

export default EventsList;
