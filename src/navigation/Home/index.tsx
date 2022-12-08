import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '@screens/Home'

const Stack = createNativeStackNavigator()

const HomeStackNavigation: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={() => ({
        headerShown: false
      })}>
      <Stack.Screen name="HomeScreen" component={Home} />
    </Stack.Navigator>
  )
}

export default HomeStackNavigation
