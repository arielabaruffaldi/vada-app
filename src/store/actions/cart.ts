import {ADD_ITEM, CONFIRM_CART, REMOVE_ITEM} from '@store/types/cart';
import {URL_API} from '@utils/data/database';

export const addItem = (item: any) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = (itemId: number) => ({
  type: REMOVE_ITEM,
  payload: itemId,
});

export const confirmCart = (payload: any, total: number) => {
  return async (dispatch: any) => {
    try {
      const response = await fetch(`${URL_API}/orders.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: Date.now(),
          items: payload,
          total,
        }),
      });
      const result = await response.json();

      dispatch({
        type: CONFIRM_CART,
        confirm: true,
      });
    } catch (error) {}
  };
};;

