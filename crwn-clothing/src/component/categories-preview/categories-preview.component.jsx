import "./categories-preview.scss";
import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../component/contexts/categories.context";
// import ProductCart from "../../component/product-card/product-card.component";
import CategoryPreview from "../../component/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/category.selector";
const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  const categories = useSelector(selectCategories);
  return (
    <Fragment>
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
