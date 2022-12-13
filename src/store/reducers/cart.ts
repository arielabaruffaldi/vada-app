import {ADD_ITEM, REMOVE_ITEM, CartActions} from '@store/types/cart';
import {CART} from '@utils/data/cart';

interface InitialState {
  items: any[];
  total: number;
}

const initialState: InitialState = {
  items: [],
  total: 0,
};

const sumTotal = (items: any) =>
  items
    .map((item: any) => item.quantity * item.price)
    .reduce((a: any, b: any) => a + b, 0);

const CartReducer = (state = initialState, action: CartActions) => {
  switch (action.type) {
    case ADD_ITEM:
      let updatedCart: any[] = [];

      if (state.items.find(item => item.id === action.payload.id)) {
        updatedCart = state.items.map(item => {
          if (item.id == action.payload.id) {
            item.quantity + 1;
          }
          return item;
        });
      } else {
        const item = {...action.payload, quantity: 1};
        updatedCart = [...state.items, item];
      }

      return {
        ...state,
        items: updatedCart,
        total: sumTotal(updatedCart),
      };

    case REMOVE_ITEM:
      const filteredCart = state.items.filter(
        item => item.id !== action.payload,
      );
      return {
        ...state,
        items: filteredCart,
        total: sumTotal(filteredCart),
      };
    default:
      return state;
  }
};

export default CartReducer;
