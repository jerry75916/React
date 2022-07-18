export enum CATEGORIES_ACTION_TYPE {
  SET_CATEGORIES = "categories/SET_CATEGORIES",
  FETCH_CATEGORIES_START = "cagegories/FETCH_CATEGORIES_START",
  FETCH_CATEGORIES_SUCCESS = "cagegories/FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORIES_FAILED = "cagegories/FETCH_CATEGORIES_FAILED",
}

export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

export type Category = {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
};
