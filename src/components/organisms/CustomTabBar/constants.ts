import Home from '@assets/svg/HomeIcon'

// https://akveo.github.io/eva-icons/#/?searchKey=user&type=outline

export interface OptionItem {
  path: string
  icon: typeof Home
  nameCode: number
}
export const OPTIONS = [
  {
    path: 'Home',
    icon: 'home',
    title: 'Home'
  },
  {
    path: 'Search',
    icon: 'search1',
    title: 'Search'
  },
  {
    path: 'Cart',
    icon: 'shoppingcart',
    title: 'Cart'
  },
  {
    path: 'Favourites',
    icon: 'hearto',
    title: 'Favoritos'
  },
  {
    path: 'Profile',
    icon: 'user',
    title: 'Profile'
  }
]
