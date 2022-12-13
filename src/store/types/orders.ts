export const GET_ORDERS = 'GET_ORDERS';

export interface GetOrders {
  type: typeof GET_ORDERS;
  payload: number;
}

export type OrdersActions = GetOrders;
