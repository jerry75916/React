import { CATEGORIES_ACTION_TYPE } from "./category.type";
import { CategoryAction } from "./category.action";
export const CATEGORIES_INIT_STAT = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INIT_STAT,
  action = {} as CategoryAction
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };

    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: payload, isLoading: false };

    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED:
      return { ...state, error: payload, isLoading: false };

    default:
      return state;
  }
};
