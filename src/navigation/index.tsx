import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import ShopNavigator from './shop'

const AppNavigation: FC = () => {
  return (
    <NavigationContainer>
      <ShopNavigator />
    </NavigationContainer>
  )
}

export default AppNavigation
