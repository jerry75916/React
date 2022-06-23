import { useContext, useState, useEffect, Fragment } from "react";
import { CategoryContainer } from "./category.style.jsx";
//傳入url 路徑參數
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../component/contexts/categories.context";
import ProductCart from "../../component/product-card/product-card.component";
import { useSelector } from "react-redux";
import {
  selectCategories,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";
import Spinner from "../../component/spinner/spinner.component";
const Category = () => {
  const { category } = useParams(); //抓url parameter字串

  // const { categoriesMap } = useContext(CategoriesContext); //所有category 包含item
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setproducts] = useState(categories[category]);

  useEffect(() => {
    setproducts(categories[category]);
    window.scrollTo(0, 0);
    //取單一category
  }, [categories, category]);

  return (
    <Fragment>
      <h2>{category.toLocaleUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {
            //防止async 造成還沒拿到component
            products &&
              products.map(
                (product) => <ProductCart key={product.id} product={product} /> //items
              )
          }
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
