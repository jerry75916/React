import React, { useState, useEffect } from "react";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Product from "./Product";
import "./ProductList.scss";
import { products as ProductData } from "../../products-data";
const ProductList = () => {
  const allCategories = [
    "All",
    ...new Set(
      ProductData.map((product) => {
        return product.category;
      })
    ),
  ];
  // const [_productData, setProduct] = useState(ProductData);
  const [_keyinValue, setKeyinValue] = useState("");
  const [_FilterProducts, setFilterProducts] = useState([]);
  const [_Categories, setCategories] = useState(allCategories);

  const ClickCategoryBtn = (category) => {
    if (category === "All") {
      setFilterProducts(ProductData);
      return;
    }
    setFilterProducts(
      ProductData.filter((p) => {
        return p.category === category;
      })
    );
  };

  const onChangeHandler = (e) => {
    setKeyinValue(e.target.value);
  };

  useEffect(() => {
    setFilterProducts(
      ProductData.filter((p) => {
        return p.title.toUpperCase().includes(_keyinValue.toUpperCase());
      })
    );
  }, [_keyinValue]);
  return (
    <>
      <div className="header">
        <div className="container">
          <h1 className=" --text-light --text-center">
            <span className=" --color-danger">Product </span>Filter
          </h1>
          <div className=" --flex-between --flex-dir-column --py">
            <Search value={_keyinValue} onChangeEvent={onChangeHandler} />
            <Categories AllCategories={_Categories} Fun={ClickCategoryBtn} />
          </div>
        </div>
      </div>
      <div className="product-container">
        <div className="products container --grid-25 --py2">
          {_FilterProducts.length === 0 ? (
            <h3>No products found</h3>
          ) : (
            _FilterProducts.map((product) => {
              return <Product key={product.id} product={product} />;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
