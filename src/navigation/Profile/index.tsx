import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Profile from '@screens/Profile';

const Stack = createNativeStackNavigator();

const ProfileStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={({route, navigation}) => ({
        headerShown: false, 
      })}>
      <Stack.Screen name="ProfileScreen" component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigation;
