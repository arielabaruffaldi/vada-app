import { useFonts } from 'expo-font';

import Text from '@atoms/Text';

import Home from '@screens/Main/Home';
import AppNavigation from '@navigation';

export default function App() {
  const [fontsLoaded] = useFonts({
    'DMSans-Bold': require('./src/assets/fonts/DMSans-Bold.ttf'),
    'DMSans-Regular': require('./src/assets/fonts/DMSans-Regular.ttf'),
    'DMSans-Medium': require('./src/assets/fonts/DMSans-Medium.ttf')
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AppNavigation />
  );
}

