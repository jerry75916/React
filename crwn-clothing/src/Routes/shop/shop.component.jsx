// import { useContext, Fragment } from "react";
// import { CategoriesContext } from "../../component/contexts/categories.context";
// import ProductCart from "../../component/product-card/product-card.component";
// import CategoryPreview from "../../component/category-preview/category-preview.component";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../../component/categories-preview/categories-preview.component";
import "./shop.style.scss";
import Category from "../category/category.component";

const Shop = () => {
  /* index為shop變成主頁的概念，path為使用組件名，所以用category   */
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  );
};

export default Shop;
