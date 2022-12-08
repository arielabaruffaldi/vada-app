import React from 'react'
import CategoryItem, { Category } from '@molecules/CategoryItem'
import styles from './styles'

import { selectCategory } from '@store/actions/category'
import Layout from '@organisms/Layout'

const Search = ({ navigation }: any) => {
  const categories = [
    { id: 1, title: 'Recitales', color: '#FFC107' },
    { id: 2, title: 'Teatro', color: '#F44336' },
    { id: 3, title: 'Cine', color: '#4CAF50' },
    { id: 4, title: 'Deportes', color: '#2196F3' },
    { id: 5, title: 'Comida', color: '#FF9800' }
  ]

  const handleSelectedCategory = (item: any) => {
    navigation.navigate('Events', {
      name: item.title
    })
  }

  return (
    <Layout style={styles.container}>
      {categories.map((category: Category) => (<CategoryItem key={category.id} item={category} onSelected={handleSelectedCategory} />))}
    </Layout>
  )
}

export default Search
