import { FC } from 'react'
import { Provider } from 'react-redux'
import { useFonts } from 'expo-font'

import AppNavigation from '@navigation'
import store from '@store/index'

const App: FC = () => {
  const [fontsLoaded] = useFonts({
    'DMSans-Bold': require('./src/assets/fonts/DMSans-Bold.ttf'),
    'DMSans-Regular': require('./src/assets/fonts/DMSans-Regular.ttf'),
    'DMSans-Medium': require('./src/assets/fonts/DMSans-Medium.ttf')
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}

export default App
