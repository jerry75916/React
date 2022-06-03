import "./cart-dropdown.style.jsx";
import CartItem from "../cart-Item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import { Navigate, useNavigate } from "react-router-dom";
import {
  CartItemLink,
  Cart_item,
  DropDownContainer,
  Cart_items,
  EmptyMessage,
} from "./cart-dropdown.style.jsx";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goTocheckout = (e) => {
    e.preventDefault();
    navigate("/CheckOut");
  };

  return (
    <DropDownContainer>
      <Cart_items>
        {cartItems.length ? (
          cartItems.map((cartitem) => {
            return <CartItem key={cartitem.id} cartItem={cartitem} />;
          })
        ) : (
          <EmptyMessage>Your Cart is Empty</EmptyMessage>
        )}
      </Cart_items>
      <CartItemLink herf="/#" onClick={goTocheckout}>
        GO TO CHECKOUT
      </CartItemLink>
    </DropDownContainer>
  );
};

export default CartDropdown;
