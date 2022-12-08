import Text from '@atoms/Text';
import Layout from '@organisms/Layout';
import {RootState} from '@store/';
import {getOrders} from '@store/actions/orders';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state: RootState) => state.orders.orders);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <Layout hasPadding>
      <View>
        {orders.map((order: any) => {
          return (
            <>
              <Text>date: {order.date}</Text>
              {order.items.map((item: any) => {
                return <Text>{item.title}</Text>;
              })}
              <Text>total: {order.total}</Text>
            </>
          );
        })}
      </View>
    </Layout>
  );
};

export default Orders;
