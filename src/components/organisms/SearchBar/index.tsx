import { View } from 'react-native'
import { FC, useState } from 'react'

import { AntDesign } from '@expo/vector-icons'

import Input from '@atoms/Input'

import styles from './styles'

const SearchBar: FC = () => {
  const [searchVal, setSearchVal] = useState('')
  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={24} color="black" />
      <Input
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        onChangeText={text => setSearchVal(text)}
        value={searchVal}
        variant="text"
        size="small"
      />
    </View>
  )
}

export default SearchBar
