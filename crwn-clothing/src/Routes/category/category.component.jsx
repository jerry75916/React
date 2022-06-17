import { useContext, useState, useEffect, Fragment } from "react";
import "./category.style.scss";
//傳入url 路徑參數
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../component/contexts/categories.context";
import ProductCart from "../../component/product-card/product-card.component";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/category.selector";
const Category = () => {
  const { category } = useParams(); //抓url parameter字串

  // const { categoriesMap } = useContext(CategoriesContext); //所有category 包含item
  const categories = useSelector(selectCategories);
  const [products, setproducts] = useState(categories[category]);

  useEffect(() => {
    setproducts(categories[category]);
    window.scrollTo(0, 0);
    //取單一category
  }, [categories, category]);

  return (
    <Fragment>
      <div className="category-product-container">
        <h2 className="title">{category.toLocaleUpperCase()}</h2>
        {
          //防止async 造成還沒拿到component
          products &&
            products.map(
              (product) => <ProductCart key={product.id} product={product} /> //items
            )
        }
      </div>
    </Fragment>
  );
};

export default Category;
