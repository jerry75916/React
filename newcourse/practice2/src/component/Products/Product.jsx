import React from "react";
import "./Product.scss";
const Product = ({ product }) => {
  const { title, price, img } = product;
  return (
    <div className="Product --card">
      <img src={img} ral=""></img>
      <div className="--bg-primary --center-all --p">
        <h3 className=" --text-light">{title}</h3>
        <div className=" --flex-between --width-100 ">
          <p className=" --text-light">{price}</p>
          <button className=" --btn --btn-danger">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
