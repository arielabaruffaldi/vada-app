import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import BottomTabsNavigator from '@navigation/BottomTab'

const AppNavigation: FC = () => {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  )
}

export default AppNavigation
