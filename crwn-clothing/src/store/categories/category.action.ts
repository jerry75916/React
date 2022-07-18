import { CATEGORIES_ACTION_TYPE, Category } from "./category.type";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { createAction, Action, ActionWithPayload } from "../reducer.utils";

export type FetchCategoriesStart =
  Action<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;

export type FetchCategoriesFailed = ActionWithPayload<
  CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED,
  Error
>;

export type SetCategories = ActionWithPayload<
  CATEGORIES_ACTION_TYPE.SET_CATEGORIES,
  Category[]
>;
export type CategoryAction =
  | FetchCategoriesFailed
  | FetchCategoriesStart
  | FetchCategoriesSuccess;
export const setcategories = (categories: Category[]): SetCategories =>
  createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categories);

export const fetchCategoriesStart = (): FetchCategoriesStart =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (
  categories: Category[]
): FetchCategoriesSuccess =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesFailed = (error: Error): FetchCategoriesFailed =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error);

// const a = () => (dispatch) => {

// };
//redux-saga 時此行不用加
// export const fetchCategoriesAsnyc = () => async (dispatch) => {
//   //使用方式如function a return 一個async function 給外界
//   // functino()
//   dispatch(fetchCategoriesStart()); //isloading:true
//   try {
//     const categoriesArray = await getCategoriesAndDocuments();
//     dispatch(fetchCategoriesSuccess(categoriesArray)); //isloading false
//   } catch (error) {
//     dispatch(fetchCategoriesFailed(error));
//   }
// };
