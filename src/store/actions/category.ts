import {SELECT_CATEGORY} from '@store/types/category';

export const selectCategory = (id: number) => ({
  type: SELECT_CATEGORY,
  payload: id,
});
