import React, { FC, useEffect } from 'react'
import { View } from 'react-native'

import EventsList from '@organisms/EventsList'
import Layout from '@organisms/Layout'

import styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { filterEvents } from '@store/actions/events'

const Events: FC = () => {
  const dispatch = useDispatch()

  const selectedCategory = useSelector(
    (state: any) => state.categories.selected
  )
  const filteredEvents = useSelector(
    (state: any) => state.events.filteredEvents
  )

  useEffect(() => {
    dispatch(filterEvents(selectedCategory.id))
  }, [])

  return (
    <Layout hasPadding>
      <View style={styles.box}>
        <EventsList events={filteredEvents} />
      </View>
    </Layout>
  )
}

export default Events
