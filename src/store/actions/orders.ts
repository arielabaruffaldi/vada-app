import {SELECT_CATEGORY} from '@store/types/category';
import {URL_API} from '@utils/data/database';

export const getOrders = () => {
  return async (dispatch: any) => {
    try {
      const response = fetch(`${URL_API}/orders.json`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await (await response).json();
      const orders = Object.keys(result).map((key: any) => ({
        ...result[key],
        id: key,
      }));
      dispatch({
        type: 'GET_ORDERS',
        payload: orders,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
