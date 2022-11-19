import Text from "@atoms/Text"
import PaddingWrapper from "@containers/PaddingWrapper"
import SearchBar from "@organisms/SearchBar";

import styles from './styles'

const Home = () => {
  return (
    <PaddingWrapper hasPadding style={styles.container}>
      <SearchBar />
      <Text size="large" weight="bold" style={styles.title}>Order online, collect in store</Text>
    </PaddingWrapper>
  )
}

export default Home 