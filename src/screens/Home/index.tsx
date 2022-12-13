import Button from '@atoms/Button'
import Text from '@atoms/Text'
import PaddingWrapper from '@containers/PaddingWrapper'
import { AntDesign } from '@expo/vector-icons'
import Carrousel from '@organisms/Carrousel'
import SearchBar from '@organisms/SearchBar'
import { Colors, Spacing } from '@theme/index'
import { EVENTS } from '@utils/data/events'
import { FC } from 'react'
import { View } from 'react-native'

import styles from './styles'

const Home: FC = () => {
  return (
    <>
      <PaddingWrapper hasPadding style={styles.container}>
        <SearchBar />
        <Text size="large" weight="bold" style={styles.title}>
          No te pierdas ningún evento
        </Text>
        <Text color="violet" style={styles.carrouselTitle}>
          Eventos
        </Text>
        <Carrousel data={EVENTS} />
        <View style={{ alignSelf: 'flex-end', marginTop: Spacing.SMALL }}>
          <Button
            onPress={() => console.warn('TEST')}
            variation="text"
            style={{ flexDirection: 'row', alignItems: 'center' }}
          >
            <Text
              size="xsmall"
              color="violet"
              weight="bold"
              style={{ marginRight: Spacing.TINY / 2 }}
            >
              see more
            </Text>
            <AntDesign name="arrowright" size={15} color={Colors.violet} />
          </Button>
        </View>
      </PaddingWrapper>
    </>
  )
}

export default Home
