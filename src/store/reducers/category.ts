import { Category } from '@molecules/CategoryItem';
import { CATEGORIES } from '@utils/data/categories';
import { CategoryActions, SELECT_CATEGORY } from './../types/category';

interface InitialState {
  categories: Category[];
  selected: Category | null;
}

const initialState: InitialState = {
  categories: CATEGORIES,
  selected: null,
};

const CategoryReducer = (state = initialState, action: CategoryActions) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      const indexCategory = state.categories.findIndex(
        category => category.id === action.payload,
      );
      if (indexCategory === -1) return state;
      return {
        ...state,
        selected: state?.categories[indexCategory],
      };
  }
  return state;
};

export default CategoryReducer;
