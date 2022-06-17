import "./product-card.style.scss";
import Button from "../buttons/button.component";
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItem } from "../../store/cart/cart.selector";

const ProductCart = ({ product }) => {
  const { name, price, imageUrl } = product;
  // const { addItemToCart } = useContext(CartContext);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItem);

  const addproductFun = (e) => {
    e.preventDefault();
    dispatch(addItemToCart(cartItems, product));
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />

      <a href="/#" onClick={addproductFun} className="product-link">
        Add to Card
      </a>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};
export default ProductCart;
