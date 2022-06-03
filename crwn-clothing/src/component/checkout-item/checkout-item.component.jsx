import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import "./checkout-item.style.scss";
import { FcNext, FcPrevious } from "react-icons/fc";
const CheckOutItem = ({ cartitem }) => {
  const { addItemToCart, DelItemToCart, RemoveProduceToCart } =
    useContext(CartContext);
  const { id, name, imageUrl, quantity, price } = cartitem;

  const addItemHandler = () => addItemToCart(cartitem);
  const delItemHandler = () => DelItemToCart(cartitem);
  const RemoveProductHandler = () => RemoveProduceToCart(cartitem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <h1 className="name">{name}</h1>
      <div className="quantity">
        <div onClick={delItemHandler} className="arrow">
          <FcPrevious size="16px" />
        </div>
        <span className="value"> {quantity}</span>
        <div onClick={addItemHandler} className="arrow">
          {<FcNext size="16px" />}
        </div>
      </div>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={RemoveProductHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutItem;
