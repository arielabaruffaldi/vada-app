import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'

import BottomTabsNavigator from '@navigation/BottomTab'
import { RootState } from '@store/'

import LoginStackNavigation from './Auth'

const AppNavigation: FC = () => {
  const userId: string = useSelector((state: RootState) => state.auth.userId)

  return (
    <NavigationContainer>
      {userId.length > 0 ? <BottomTabsNavigator /> : <LoginStackNavigation />}
    </NavigationContainer>
  )
}

export default AppNavigation
