import Button from '@atoms/Button'
import Text from '@atoms/Text'
import PaddingWrapper from '@containers/PaddingWrapper'
import { AntDesign } from '@expo/vector-icons'
import Carrousel from '@organisms/Carrousel'
import SearchBar from '@organisms/SearchBar'
import { Colors, Spacing } from '@theme/index'
import { FC } from 'react'
import { View } from 'react-native'

import styles from './styles'

const slideList = [
  {
    id: 1,
    image: `https://picsum.photos/1440/2842?random=${1}`,
    title: 'Apple Watch',
    subtitle: 'Series 6 . Red',
    price: '359'
  },
  {
    id: 2,
    image: `https://picsum.photos/1440/2842?random=${2}`,
    title: 'Samsung Watch',
    subtitle: 'Series 6 . Red',
    price: '159'
  },
  {
    id: 3,
    image: `https://picsum.photos/1440/2842?random=${3}`,
    title: 'Apple Watch',
    subtitle: 'Series 6 . Red',
    price: '359'
  },
  {
    id: 4,
    image: `https://picsum.photos/1440/2842?random=${4}`,
    title: 'Samsung Watch',
    subtitle: 'Series 6 . Red',
    price: '159'
  }
]

const Home: FC = () => {
  return (
    <>
      <PaddingWrapper hasPadding style={styles.container}>
        <SearchBar />
        <Text size="large" weight="bold" style={styles.title}>
          Order online, collect in store
        </Text>
        <Text color="violet" style={styles.carrouselTitle}>
          Watches
        </Text>
        <Carrousel data={slideList} />
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
