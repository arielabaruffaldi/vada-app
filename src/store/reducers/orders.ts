import { OrdersActions, GET_ORDERS } from './../types/orders';

interface InitialState {
  orders: any[];
}

const initialState: InitialState = {
  orders: [],
};
const OrdersReducer = (state = initialState, action: OrdersActions) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
};

export default OrdersReducer;
