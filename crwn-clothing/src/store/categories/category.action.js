import { CATEGORIES_ACTION_TYPE } from "./category.type";
export const setcategories = (categories) => {
  return {
    type: CATEGORIES_ACTION_TYPE.SET_CATEGORIES,
    payload: categories,
  };
};
