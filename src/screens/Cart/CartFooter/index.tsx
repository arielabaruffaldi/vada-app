import Button from '@atoms/Button';
import Text from '@atoms/Text';
import React from 'react';
import {View} from 'react-native';

import styles from './styles';

interface CartFooterProps {
  total: number;
  confirmAction: () => void;
}

const CartFooter: React.FunctionComponent<CartFooterProps> = ({
  total,
  confirmAction,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.priceContainer}>
        <Text weight="regular" color="black" size="medium">
          Total:
        </Text>
        <Text
          weight="bold"
          color="black"
          style={styles.totalPrice}
          size="medium">
          ${total}
        </Text>
      </View>
      <View style={styles.buttons}>
        <Button
          onPress={confirmAction}
          style={[styles.button, styles.buttonConfirm]}>
          <Text align="center" color="white">
            Confirmar
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default CartFooter;
