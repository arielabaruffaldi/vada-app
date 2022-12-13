import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from '@screens/Auth/Login'
import SignUp from '@screens/Auth/SignUp'

const Stack = createNativeStackNavigator()

const LoginStackNavigation: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={({ route, navigation }) => ({
        headerShown: false
      })}>
      <Stack.Screen name="LoginScreen" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  )
}

export default LoginStackNavigation
