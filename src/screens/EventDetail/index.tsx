import React from 'react'

import Banner from '@atoms/Banner'
import Button from '@atoms/Button'
import Text from '@atoms/Text'

import { View, TouchableOpacity, Text as TextNative } from 'react-native'
import Layout from '@organisms/Layout'

import styles from './styles'

export interface Event {
  categoryId: number
  description: string
  id: number
  image: string
  price: number
  title: string
}

const EventDetail = () => {
  const event = {
    categoryId: 23,
    description: 'Some description test',
    id: 133,
    image: 'urlTest',
    price: 400,
    title: 'Title Test'
  }

  const handleAddItem = () => {
    console.log('aca')
  }

  return (
    <Layout hasPadding title={event?.title}>
      <View>
        <Banner image={event.image} style={styles.bannerHeader} />
        <Text>{event.title}</Text>
        <TouchableOpacity>
          <TextNative>TEST</TextNative>
        </TouchableOpacity>
        <Button onPress={handleAddItem}>
          <Text color="white">Agregar al carrito </Text>
        </Button>
      </View>
    </Layout>
  )
}

export default EventDetail
