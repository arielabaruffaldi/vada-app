import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '@screens/Home'
import EventDetail from '@screens/EventDetail'

const Stack = createNativeStackNavigator()

const HomeStackNavigation: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={() => ({
        headerShown: false
      })}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="EventDetail" component={EventDetail} />
    </Stack.Navigator>
  )
}

export default HomeStackNavigation
