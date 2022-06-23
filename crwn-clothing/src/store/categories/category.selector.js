import { createSelector } from "reselect"; //只計算與執行一次新數組，若數組沒改變的話，就直接拿儲存的值來作，cache的概念

//原本是在utils 中，但為了更好辨視不會將所有的category 放在utils中，畢竟util是為了先取得資料，而真正處理資料是在redux對應的store中

// export const selectCategories = (state) =>
//   state.categories.categories.reduce((acc, category) => {
//     const { title, items } = category;
//     acc[title.toLowerCase()] = items;
//     return acc;
//   }, {});

const selectcategoryReducer = (state) => state.categories;

export const selectCategoryNotChange = createSelector(
  [selectcategoryReducer], //看看傳進來的資料有無更動

  (categoriesSlice) => categoriesSlice.categories //只有更動後才會回傳，categoriesSlice===state.categories===selectcategoryReducer
);

export const selectCategories = createSelector(
  [selectCategoryNotChange], //看看有無更動
  (
    categories //只有更動後才會回傳的值，categories===state.categories.categories===selectCategoryNotChange
  ) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectCategoriesIsLoading = createSelector(
  [selectcategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);

// export const selectCategoriesMap = createSelector(
//   [selectCategories],
//   (categories) =>
//     categories.reduce((acc, category) => {
//       const { title, items } = category;
//       acc[title.toLowerCase()] = items;
//       return acc;
//     }, {})
// ); //reduce 的初值為object, 把Items設為acc[mens]:[id:1,price:]...
