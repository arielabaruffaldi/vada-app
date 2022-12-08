import React, { FC } from 'react'
import styles from './styles'

import Layout from '@organisms/Layout'
import Text from '@atoms/Text'

const Search: FC = () => {
  return (
    <Layout style={styles.container}>
      <Text>Search screen</Text>
    </Layout>
  )
}

export default Search
