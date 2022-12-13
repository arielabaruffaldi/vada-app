
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CONFIRM_CART = 'CONFIRM_CART';

export interface AddItem {
  type: typeof ADD_ITEM;
  payload: any;
}

export interface RemoveItem {
  type: typeof REMOVE_ITEM;
  payload: number;
}

export interface ConfirmCart {
  type: typeof CONFIRM_CART;
  payload: any;
}

export type CartActions = AddItem | RemoveItem | ConfirmCart;
