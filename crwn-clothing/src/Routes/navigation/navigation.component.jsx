import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
// import "./navigation.style.scss";
import { UserContext } from "../../component/contexts/user.context";
import { SignOutFun } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../component/cart-icon/cart-icon.componet";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../component/contexts/cart.context";
import {
  NavigationContainer,
  NaviLinks,
  NavLink,
  LogoContainer,
} from "./navigation.style";
const Navgation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>

        <NaviLinks>
          <NavLink to="/Shop">Shop</NavLink>
          <NavLink to="/CheckOut">CheckOut</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={SignOutFun}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/Authentication">Sign In</NavLink>
          )}
          <CartIcon />
        </NaviLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navgation;
