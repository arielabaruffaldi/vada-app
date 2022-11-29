import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '@screens/Home'
import ProductDetail from '@screens/ProductDetail'
import { FC } from 'react'

const Stack = createNativeStackNavigator()

const ShopNavigator: FC = () => {
  return (
    <Stack.Navigator
      /*  screenOptions={{
         headerShown: false
       }} */
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  )
}

export default ShopNavigator
