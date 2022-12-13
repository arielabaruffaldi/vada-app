import { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CustomTabBar from '@organisms/CustomTabBar'
import HomeStackNavigation from '../Home'
import SearchStackNavigation from '../Search'
import CartStackNavigation from '../Cart'
import FavouritesStackNavigation from '../Favourites'
import ProfileStackNavigation from '../Profile'

const Tab = createBottomTabNavigator()

const BottomTabsNavigator: FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props: any) => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeStackNavigation} />
      <Tab.Screen name="Search" component={SearchStackNavigation} />
      <Tab.Screen name="Cart" component={CartStackNavigation} />
      <Tab.Screen name="Favourites" component={FavouritesStackNavigation} />
      <Tab.Screen name="Profile" component={ProfileStackNavigation} />
    </Tab.Navigator>
  )
}

export default BottomTabsNavigator
