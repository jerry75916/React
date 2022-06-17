import { CATEGORIES_ACTION_TYPE } from "./category.type";
export const CATEGORIES_INIT_STAT = {
  categories: [],
};

export const categoriesReducer = (state = CATEGORIES_INIT_STAT, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPE.SET_CATEGORIES:
      return { ...state, categories: payload };
      break;
    default:
      return state;
  }
};
