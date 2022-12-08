import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Search from '@screens/Search';
import Events from '@screens/Events';
import EventDetail from '@screens/EventDetail';

const Stack = createNativeStackNavigator();

const SearchStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen name="SearchScreen" component={Search} />
      <Stack.Screen
        name="Events"
        component={Events}
        options={({route}: any) => ({title: route.params.name})}
      />
      <Stack.Screen name="EventDetail" component={EventDetail} />

    </Stack.Navigator>
  );
};

export default SearchStackNavigation;
