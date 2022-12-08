import React, { FC } from 'react'
import { View } from 'react-native'

import EventsList from '@organisms/EventsList'
import Layout from '@organisms/Layout'

import styles from './styles'

const Events: FC = () => {
  const filteredEvents = [
    {
      id: 1,
      categoryId: 23,
      title: 'Title 1',
      description: 'Description test',
      image: 'url1'
    },
    {
      id: 2,
      categoryId: 24,
      title: 'Title 2',
      description: 'Description test 2',
      image: 'url2'
    }
  ]
  return (
    <Layout hasPadding>
      <View style={styles.box}>
        <EventsList events={filteredEvents} />
      </View>
    </Layout>
  )
}

export default Events
