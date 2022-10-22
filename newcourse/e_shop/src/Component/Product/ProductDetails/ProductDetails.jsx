import React, { useState, useEffect, useCallback } from "react";
import styles from "./ProductDetails.module.scss";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { async } from "@firebase/util";
import {
  storage,
  sotreDb,
  StorageeRef,
  StorageDeleObj,
} from "../../../pages/firebase/config";
import Loader from "../../loader/Loader";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_TO_CART,
  DECRESE_CART,
  selectCartItems,
  CALCULATE_TOTALQUANTITY,
} from "../../../redux/slice/cartSlice";
import useFetchDocument from "../../../customHooks/useFetchDocument";

const ProductDetails = () => {
  const { id } = useParams();
  const CartItems = useSelector(selectCartItems);
  const ThisCartItem = CartItems.find((item) => item.id === id);
  const [isloading, setisLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch(ADD_TO_CART(product));
  };
  const decreaseCart = (product) => {
    dispatch(DECRESE_CART(product));
  };
  const { document, Loading } = useFetchDocument("products", id);
  useEffect(() => {
    setProduct(document);
    setisLoading(Loading);
  }, [Loading, document]);

  useEffect(() => {
    dispatch(CALCULATE_TOTALQUANTITY());
  }, [dispatch, CartItems]);
  return (
    <div>
      {isloading ? (
        <Loader />
      ) : (
        <section>
          <div className={`container ${styles.product}`}>
            <h2>Product Details</h2>
            <div>
              <Link to="/#products">&larr; Back To Products</Link>
            </div>
            {
              <div className={styles.details}>
                <div className={styles.img}>
                  <img src={product.imageURL} alt={product.name} />
                </div>
                <div className={styles.content}>
                  <h3>{product.name}</h3>
                  <p className={styles.price}>{`$${product.price}`}</p>
                  <p>{product.desc}</p>
                  <p>
                    <b>SKU</b> {product.id}
                  </p>
                  <p>
                    <b>Brand</b> {product.brand}
                  </p>
                  {ThisCartItem ? (
                    <div className={styles.count}>
                      <button
                        className="--btn"
                        onClick={() => decreaseCart(product)}
                      >
                        -
                      </button>
                      <p>
                        <b>{ThisCartItem.Quantity}</b>
                      </p>
                      <button
                        className="--btn"
                        onClick={() => addToCart(product)}
                      >
                        +
                      </button>
                    </div>
                  ) : null}

                  <button
                    className="--btn --btn-danger"
                    onClick={() => addToCart(product)}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            }
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetails;
