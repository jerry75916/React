import "./categories-preview.scss";
import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../component/contexts/categories.context";
// import ProductCart from "../../component/product-card/product-card.component";
import CategoryPreview from "../../component/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
