import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';

import { Fonts } from '@theme';
import Text from '@atoms/Text';

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
    <View style={styles.container}>
      <Text size="large" weight='bold'>Recomendados para vos</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
