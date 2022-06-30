import { CATEGORIES_ACTION_TYPE } from "./category.type";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const setcategories = (categories) => {
  return {
    type: CATEGORIES_ACTION_TYPE.SET_CATEGORIES,
    payload: categories,
  };
};

export const fetchCategoriesStart = () => {
  return {
    type: CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START,
    payload: false,
  };
};

export const fetchCategoriesSuccess = (categories) => {
  return {
    type: CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,
    payload: categories,
  };
};

export const fetchCategoriesFailed = (error) => {
  return {
    type: CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED,
    payload: error,
  };
};
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
