import "./cart-icon.styles";
import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";
// import { useContext } from "react";
// import { CartContext } from "../contexts/cart.context";
import { setisCartOpen } from "../../store/cart/cart.action";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { useSelector, useDispatch } from "react-redux";

import {
  Shopping_Icon,
  Item_Count,
  Cart_icon_Container,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  // const { isCartOpen, setisCartOpen, cartQuantity } = useContext(CartContext);
  // const toggle = () => setisCartOpen(!isCartOpen);
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const IsCartOpen = useSelector(selectIsCartOpen);
  const toggle = () => dispatch(setisCartOpen(!IsCartOpen));
  return (
    <Cart_icon_Container onClick={toggle}>
      <Shopping_Icon />
      <Item_Count>{Number(cartCount)}</Item_Count>
    </Cart_icon_Container>
  );
};

export default CartIcon;
