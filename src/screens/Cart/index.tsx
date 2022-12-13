/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { FC } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Layout from '@organisms/Layout'

import CartFooter from './CartFooter'
import CartItem from './CartItem'
import styles from './styles'
import { RootState } from '@store/index'
import { useDispatch, useSelector } from 'react-redux'
import { confirmCart, removeItem } from '@store/actions/cart'

const Cart: FC = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const items = useSelector((state: RootState) => state.cart.items)

  const total = useSelector((state: RootState) => state.cart.total)

  const handleConfirmCart = () => {
    dispatch(confirmCart(items, total))
    navigation.navigate('Orders')
  }

  const handleOnDelete = (id: number) => {
    dispatch(removeItem(id))
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
