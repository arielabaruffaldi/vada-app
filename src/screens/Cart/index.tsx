import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Layout from '@organisms/Layout'

import CartFooter from './CartFooter'
import CartItem from './CartItem'
import styles from './styles'

// import { CART } from '@utils/data/cart';

const Cart = () => {
  const navigation = useNavigation()

  const items = [
    {
      id: 1,
      image: 'test',
      title: 'Title 1',
      price: 123,
      quantity: 2
    },
    {
      id: 2,
      image: 'test2',
      title: 'Title 2',
      price: 33,
      quantity: 1
    }
  ]

  const total = 100

  const handleConfirmCart = () => {
    navigation.navigate('Orders')
  }

  const handleOnDelete = (id: number) => {
    console.warn(`handle on delete ${id}`)
  }

  return (
    <Layout hasPadding>
      <View style={styles.container}>
        <View>
          {items.map((item: any) => {
            return (
              <CartItem
                style={styles.box}
                key={item.id}
                item={item}
                onDelete={handleOnDelete}
              />
            )
          })}
        </View>
        <View style={styles.box}>
          <CartFooter total={total} confirmAction={handleConfirmCart} />
        </View>
      </View>
    </Layout>
  )
}

export default Cart
