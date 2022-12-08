import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Orders from '../../screens/Orders'
import Cart from '@screens/Cart'

const Stack = createNativeStackNavigator()

const CartStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="CartScreen"
      screenOptions={({ route, navigation }) => ({
        headerShown: false
        // contentStyle: {backgroundColor: Colors.white}
      })}>
      <Stack.Screen name="CartScreen" component={Cart} />
      <Stack.Screen name="Orders" component={Orders} />

    </Stack.Navigator>
  )
}

export default CartStackNavigation
