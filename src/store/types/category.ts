//CATEGORIES

export const SELECT_CATEGORY = 'SELECT_CATEGORY';

export interface SetSelectedCategory {
  type: typeof SELECT_CATEGORY;
  payload: number;
}

export type CategoryActions = SetSelectedCategory;
