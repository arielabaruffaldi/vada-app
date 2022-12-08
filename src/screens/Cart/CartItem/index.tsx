import Button from '@atoms/Button'
import Icon from '@atoms/Icon'
import Text from '@atoms/Text'
import { Colors } from '@theme'
import React from 'react'
import { Image, TextStyle, View } from 'react-native'
import styles from './styles'

interface CartItemProps {
  item: any
  style: TextStyle | TextStyle[]
  onDelete: (id: number) => any
}

const CartItem: React.FunctionComponent<CartItemProps> = ({
  item,
  style,
  onDelete
}) => {
  return (
    <View style={[styles.container, style]}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text weight="bold" color="black">
          {item.title}
        </Text>
        <Text>${item.price}</Text>
        <Text weight="regular" color="gray">
          Cantidad: {item.quantity}
        </Text>
      </View>
      <Button style={styles.buttonDelete} variation="outline" onPress={() => onDelete(item.id)}>
        <Icon size={14} height={14} name="trash-outline" fill={Colors.black} />
      </Button>
    </View>
  )
}

export default CartItem
