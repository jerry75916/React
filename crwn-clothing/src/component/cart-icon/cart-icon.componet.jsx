import "./cart-icon.styles";
import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import {
  Shopping_Icon,
  Item_Count,
  Cart_icon_Container,
} from "./cart-icon.styles.jsx";
const CartIcon = () => {
  const { isCartOpen, setisCartOpen, cartQuantity } = useContext(CartContext);
  const toggle = () => setisCartOpen(!isCartOpen);

  return (
    <Cart_icon_Container onClick={toggle}>
      <Shopping_Icon />
      <Item_Count>{Number(cartQuantity)}</Item_Count>
    </Cart_icon_Container>
  );
};

export default CartIcon;
