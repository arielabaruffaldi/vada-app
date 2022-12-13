import React, { FC } from 'react'

import Banner from '@atoms/Banner'
import Button from '@atoms/Button'
import Text from '@atoms/Text'

import { View, TouchableOpacity, Text as TextNative } from 'react-native'
import Layout from '@organisms/Layout'

import styles from './styles'
import { addItem } from '@store/actions/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@store/index'

export interface Event {
  categoryId: number
  description: string
  id: number
  image: string
  price: number
  title: string
}

const EventDetail: FC = () => {
  const dispatch = useDispatch()

  const handleAddItem = () => {
    dispatch(addItem(event))
  }

  const event: Event = useSelector((state: RootState) => state.events.selected)

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
