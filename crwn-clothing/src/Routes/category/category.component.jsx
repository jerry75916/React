import { useContext, useState, useEffect, Fragment } from "react";
import "./category.style.scss";
//傳入url 路徑參數
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../component/contexts/categories.context";
import ProductCart from "../../component/product-card/product-card.component";
const Category = () => {
  const { category } = useParams(); //抓url parameter字串

  const { categoriesMap } = useContext(CategoriesContext); //所有category 包含item

  const [products, setproducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setproducts(categoriesMap[category]);
    window.scrollTo(0, 0);
    //取單一category
  }, [categoriesMap, category]);

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
