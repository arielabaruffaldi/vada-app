import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Favourites from '@screens/Favourites';

const Stack = createNativeStackNavigator();

const FavouritesStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="FavouritesScreen"
      screenOptions={({route, navigation}) => ({
        headerShown: false, 
      })}>
      <Stack.Screen name="FavouritesScreen" component={Favourites} />
    </Stack.Navigator>
  );
};

export default FavouritesStackNavigation;
