import "./categories-preview.scss";
import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../component/contexts/categories.context";
// import ProductCart from "../../component/product-card/product-card.component";
import CategoryPreview from "../../component/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import {
  selectCategories,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";
import Spinner from "../spinner/spinner.component";
const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categories).map((title) => {
          const products = categories[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
