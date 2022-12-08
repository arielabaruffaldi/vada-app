import Text from '@atoms/Text'
import Layout from '@organisms/Layout'
import React, { useEffect } from 'react'
import { View } from 'react-native'

const Orders = () => {
  const orders = [
    {
      id: 1,
      total: 300,
      items: [
        {
          title: 'Order 1',
          id: 232
        }
      ]
    }
  ]

  return (
    <Layout hasPadding>
      <View>
        {orders.map((order: any) => {
          return (
            <>
              <Text>date: {order.date}</Text>
              {order.items.map((item: any) => {
                return <Text key={item.id}>{item.title}</Text>
              })}
              <Text>total: {order.total}</Text>
            </>
          )
        })}
      </View>
    </Layout>
  )
}

export default Orders
